(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{564:function(t,e,s){"use strict";s.r(e);var a=s(40),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"decomposition-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decomposition-api"}},[t._v("#")]),t._v(" Decomposition API")]),t._v(" "),s("p",[t._v("This post was originally part of the Making Speckle 2.0 series of posts on the community forum, it's been adapted as part of our dev docs. Check out "),s("a",{attrs:{href:"https://speckle.community/t/core-2-0-decomposition-api/911",target:"_blank",rel:"noopener noreferrer"}},[t._v("the original on our forum"),s("OutboundLink")],1),t._v("!")]),t._v(" "),s("h2",{attrs:{id:"preamble"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preamble"}},[t._v("#")]),t._v(" Preamble")]),t._v(" "),s("p",[t._v("This page covers how Speckle deals with the structure and composition of design data. Please note that currently examples are only in C#, equivalent implementations are available in our other SDKs.")]),t._v(" "),s("h2",{attrs:{id:"blobs-and-trees"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blobs-and-trees"}},[t._v("#")]),t._v(" Blobs and Trees")]),t._v(" "),s("p",[t._v("Design and construction data is mostly relational: "),s("strong",[t._v("built elements link to each other.")]),t._v(" Despite this, there is no canonical way of structuring it.\nHow do they relate to each other? Well, it depends!")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://speckle.community/uploads/default/optimized/1X/cb099e4d3a8553053869d791f0ce1fcaebca3c7a_2_690x295.png",alt:""}})]),t._v(" "),s("p",[t._v("For example, a "),s("code",[t._v("Site")]),t._v(" object may contain one or more "),s("code",[t._v("Building")]),t._v(" objects. These, in turn, may contain one more "),s("code",[t._v("Levels")]),t._v(", and each of these "),s("code",[t._v("Levels")]),t._v(" may contain some "),s("code",[t._v("Walls")]),t._v(", "),s("code",[t._v("Floor")]),t._v(" and "),s("code",[t._v("Beam")]),t._v(" elements. Or, those "),s("code",[t._v("Building")]),t._v(" objects may each individually reference the same "),s("code",[t._v("Site")]),t._v(". Within the "),s("code",[t._v("Building")]),t._v(" object, there's all the "),s("code",[t._v("Walls")]),t._v(" and "),s("code",[t._v("Beams")]),t._v(", and each of them, rather than being grouped under a "),s("code",[t._v("Level")]),t._v(", they individually reference a specific "),s("code",[t._v("Level")]),t._v(".")]),t._v(" "),s("p",[t._v("In order to solve this, we've taken a good look at how git, the ubiquitous version control system, works. Git operates with two object types: blobs and trees. Blobs represent files, and an important characteristic is that they are immutable - just like objects are in Speckle. Trees represent folders, and they are used to track the hierarchy of the folder structure of your repository.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("If you think this analogy hints to more, you're right: Speckle is becoming a fully fledged version control system for design data. Keep an eye out 😎")])]),t._v(" "),s("p",[t._v("As opposed to Git, that deals with data structured on your hard drive, Speckle deals with data structured in memory. In Speckle, an object is, at the same time, both a blob (data) and a tree (its subcomponents). There are two separate, yet interweaved, problems (and their corollaries) that I'll now address:")]),t._v(" "),s("ul",[s("li",[t._v("How to decompose an object? "),s("em",[t._v("(Corollary: how to recompose an object?)")])]),t._v(" "),s("li",[t._v("How to serialise, transport and store that decomposed object? "),s("em",[t._v("(Corollary: how to retrieve and deserialise an object?)")])])]),t._v(" "),s("h2",{attrs:{id:"decomposing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decomposing"}},[t._v("#")]),t._v(" Decomposing")]),t._v(" "),s("p",[t._v("There is no right or wrong way to structure design data. Different applications operate with different models, different use-cases require different hierarchies, different disciplines and professionals operate with differently structured ontologies.")]),t._v(" "),s("p",[t._v("Speckle now has a mechanism by which, in the process of specifying an object - either via a strongly typed Kit, or via dynamic properties - developers (and end-users) can decide what gets decomposed and what doesn't.")]),t._v(" "),s("h3",{attrs:{id:"strongly-typed-detachment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#strongly-typed-detachment"}},[t._v("#")]),t._v(" Strongly Typed Detachment")]),t._v(" "),s("p",[t._v("It works, in the case of strongly typed properties, by adding the Speckle specific attribute "),s("code",[t._v("[DetachProperty]")]),t._v(" on the properties you want to store as references, rather than within the object itself.")]),t._v(" "),s("p",[t._v("For example, let's take an imaginary set of classes:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Building")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Base")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DetachProperty")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this attribute tells Speckle to store the value of the Site separately.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Site")]),t._v(" Site "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Level"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" Levels "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Owner "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Level")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Base")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")])]),t._v(" height "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")])]),t._v(" baseElevation "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DetachProperty")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" Elements "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The actual walls, floors, columns, etc.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Define a site globally")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" mySite "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("Site")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Reference the same site in both buildings.")]),t._v("\nbuildingA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Site "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mySite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbuildingB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Site "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mySite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("When an instance of the Building class gets saved, the "),s("code",[t._v("Site")]),t._v(" will be stored separately. If two Buildings share the same "),s("code",[t._v("Site")]),t._v(", it will be stored only once, and each instance of the "),s("code",[t._v("Building")]),t._v(" class will hold a reference to the same "),s("code",[t._v("Site")]),t._v(".")]),t._v(" "),s("p",[t._v("In our example, each Level can hold, in a "),s("em",[t._v("detachable")]),t._v(" property, all its walls, beams, ducts, pipes, furniture, and other built elements. Consequently, each of these elements will be individually accessible from the storage layer, and will maintain topological unity. Why is this important? Let's imagine a building with a series of levels separated by floor slabs. "),s("strong",[t._v("The slab between two levels pertains to which level: the bottom one, or the top one?")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://speckle.community/uploads/default/original/1X/3ea9d660024d5f3545933133165737e063fa87d5.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"dynamic-detachment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-detachment"}},[t._v("#")]),t._v(" Dynamic Detachment")]),t._v(" "),s("p",[t._v("Let's illustrate this through an example that also demonstrates how dynamically added properties can be detached. We'll assume that we will dynamically set "),s("code",[t._v("topSlab")]),t._v(" and "),s("code",[t._v("bottomSlab")]),t._v(" properties to each level in our imaginary object model:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We're grossly simplyfing in this example. Here are our two building levels:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" level_1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" level_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The philosophical slab instance. Does it belong to level 1 or level 2?")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" slab_between_1_and_2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("Slab")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Well, it belongs to both! Notice the "@" characther at the beginning of')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// the dynamic property assignment - it\'s the Speckle convention for "detaching"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dynamically added properties.")]),t._v("\nlevel_1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@topSlab"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slab_between_1_and_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlevel_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@bottomSlab"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slab_between_1_and_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v('Because we\'ve prepended the property name with an "@" symbol, Speckle will now "detach" it. Consequently, once stored, both level one and two will now hold a reference to a single slab! Beyond storage efficiency - the slab is only stored once - '),s("strong",[t._v("this approach gives us the freedom to structure data however is best and, simultaneously, query, slice and dice it however we need to.")])]),t._v(" "),s("p",[t._v("For example, let's assume you need to do a quantity takeoffs:")]),t._v(" "),s("ul",[s("li",[t._v("For each each individual level: specify the total surface area, including walls, ceilings, etc. Solution: simply retrieve each level individually!")]),t._v(" "),s("li",[t._v("For the whole building: calculate the total volume of concrete that goes into the slabs. Solution: just query the building object for all the slabs!")])]),t._v(" "),s("p",[t._v("Similarly, imagine you've written a script that does environmental analysis on a given level. The level can now be retrieved in its entirety - without juggling around to bring in the level above it too, just to get the ceiling out. Once the results are calculated, they can be stored in a detachable property on that specific level (e.g., "),s("code",[t._v('level_1[@"solarComfortMeshWithColours"] = analysisResultMesh;')]),t._v('). Later down the line in your workflow, one can could query for all the "'),s("code",[t._v("solarComfortMeshWithColours")]),t._v('" objects individually for each level, or, if needed, for the whole building.')]),t._v(" "),s("h2",{attrs:{id:"recomposing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recomposing"}},[t._v("#")]),t._v(" Recomposing")]),t._v(" "),s("p",[t._v("Recomposition of an object happens within the deserialisation process, and it's tightly integrated with the transport layer. The process, on the surface, is deceivingly simple. When you ask Speckle to receive a specific object, the process is as follows:")]),t._v(" "),s("ul",[s("li",[t._v('Speckle retrieves said object\'s "blob" (actually a JSON string representation of it),')]),t._v(" "),s("li",[t._v("Next up, Speckle retrieves at all the reference tree of this object,")]),t._v(" "),s("li",[t._v("Speckle proceeds to deserialise and re-compose the parent object, inserting in the place of references the actual referenced object.")])]),t._v(" "),s("p",[t._v("Wether or not this sounds complicated, the exposed API is actually rather simple and the end result is that a decomposed object, when received back, will be identical with the original one - with all its parts in place 💥")]),t._v(" "),s("h2",{attrs:{id:"chunking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chunking"}},[t._v("#")]),t._v(" Chunking")]),t._v(" "),s("h3",{attrs:{id:"problem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#problem"}},[t._v("#")]),t._v(" Problem")]),t._v(" "),s("p",[t._v("Some list properties of various objects can get very large. Examples:")]),t._v(" "),s("ul",[s("li",[t._v("a Brep with many faces will have a Surfaces list prop containing 1000s of potentially heavy Surfaces.")]),t._v(" "),s("li",[t._v("a mesh with 100k+ vertices and faces.")])]),t._v(" "),s("p",[t._v("This results in a clunky (memory heavy) serialisation process and can be unsafe (read: cause borkages) due to memory limitations.")]),t._v(" "),s("h3",{attrs:{id:"solutions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#solutions"}},[t._v("#")]),t._v(" Solutions")]),t._v(" "),s("p",[t._v("In order of preference. Note that they are not exclusive, and they build on top of each other:")]),t._v(" "),s("ul",[s("li",[t._v("First, optimise the list property so it's more lightweight")]),t._v(" "),s("li",[t._v("Second, chunk the list property")])]),t._v(" "),s("h3",{attrs:{id:"first-port-of-call-optimise-the-list-property-🧪"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#first-port-of-call-optimise-the-list-property-🧪"}},[t._v("#")]),t._v(" First port of call: Optimise the list property 🧪")]),t._v(" "),s("p",[t._v("For example, you might be tempted to define a mesh like this:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mesh")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Base")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Point"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" vertices "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("A much more efficient way is to define it like this:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mesh")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Base")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Typed array of 3")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" vertices "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Instead of storing each individual vertex as a point, you store them in a typed array. Serialisation will be much faster and leaner.")]),t._v(" "),s("h3",{attrs:{id:"second-port-of-call-use-the-chunkable-attribute-🆕"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#second-port-of-call-use-the-chunkable-attribute-🆕"}},[t._v("#")]),t._v(" Second port of call: Use the "),s("code",[t._v("Chunkable")]),t._v(" Attribute 🆕")]),t._v(" "),s("p",[t._v("In some cases you might be too lazy to actually optimise the storage of a list property, or it might be too convenient to use the class itself.")]),t._v(" "),s("p",[t._v("Alternatively, you might still have a simple "),s("code",[t._v("List<double>")]),t._v(" that expands to millions+ of items, like in the case of a very large mesh.")]),t._v(" "),s("p",[t._v("In the cases above, the best way is to mark the property as "),s("code",[t._v("Chunkable")]),t._v(" together with "),s("code",[t._v("[DetachProperty]")]),t._v(". This will tell the serialiser that it should split it into manageable chunks of items, the size of which you can control.")]),t._v(" "),s("p",[t._v("Here's how that looks like currently in the mesh class:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mesh")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Base")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DetachProperty")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chunkable")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Chunks this array into batches of 20k numbers")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" vertices "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DetachProperty")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chunkable")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Chunks this array into batches of 20k numbers")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" faces "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DetachProperty")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chunkable")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Chunks this array into batches of 20k numbers")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" colors "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DetachProperty")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chunkable")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Chunks this array into batches of 20k numbers")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" textureCoordinates "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Potential Footguns")]),t._v(" "),s("p",[t._v("The DetachProperty attribute by itself can be a performance footgun in some scenarios: for example, if you have a "),s("code",[t._v("List<Point>")]),t._v(" that can grow really big and you mark it as detachable, without marking it as chunkable, each individual point in that list will be stored as a separate entity.")]),t._v(" "),s("p",[t._v("This is bad: serialisation and deserialisation will take longer, and it essentially amounts to bad object model design (in speckle terms of course).")])]),t._v(" "),s("h2",{attrs:{id:"summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),s("p",[t._v("End users and developers can now productively control the way they structure their design data through the decomposition mechanism. From the point of view of the future Speckle connectors, this will enable us to expose object model flexibility in a more elegant way than before to end users. As developers, Speckle gives you another powerful API on top of which you can scaffold your digital automation workflows.")]),t._v(" "),s("p",[t._v("More importantly, this allows you to store arbitrary data structures (scaffolded on top of a "),s("code",[t._v("Base")]),t._v(") with Speckle, without paying any penalties: "),s("strong",[t._v("Speckle deals equally well with flat and nested data.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);