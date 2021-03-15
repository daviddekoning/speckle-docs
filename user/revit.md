---
typora-copy-images-to: img-revit
---

# Revit

The Speckle Revit Connector currently supports Autodesk Revit 2019, 2020 and 2021.

## Getting Started

To install this connector and add your Speckle account proceed by following the instructions in [Speckle Manager](/user/manager).

Once installed you can find the Revit connector under the Add-ins tab.

![image-20210303191815524](./img-revit/image-20210303191815524.png)

## User Interface

This connector uses our shared Desktop UI, head over [its section to see how it works](/user/ui).

### Filters

In Revit, various filters are available to give you more granular control on what elements to send. Once a filter is set, every time you click send, all objects matching it will be sent whether they are visible or not, and even if they were created after setting up the filter.

![image-20210303192915561](./img-revit/image-20210303192915561.png)

#### Category

The category filter lets you select one or more of the currently supported Revit categories. 

#### View

The view filter works similarly to the category one, and lets you include all elements visible in one or more views.

#### Project Info

The project info filter lets you add non physical elements, such as levels, views, element types (their properties, not geometry) and project information.

#### Parameter

The parameter filter is quite powerful as it will filter all model elements that satisfy the logical condition being set. For example, the below will select all elements whose Base Offset is greater then 2000mm.

:::tip NOTE

The list of available parameters is based off the current elements in the model, if the model is empty no parameter will be available.

:::

![image-20210303201525577](./img-revit/image-20210303201525577.png) 

## Supported Elements

We're working hard to support additional elements, the list below will be updated as soon new conversion routines are added.

If you'd like us to add something specific let us know on the [forum](https://discourse.speckle.works/t/speckle-unity-2-0-feedback-wanted/1108)!

| Type                                                  | Speckle > Revit | Revit > Speckle |
| ----------------------------------------------------- | --------------- | --------------- |
| Adaptive Component                                    | x               | x               |
| Beam                                                  | x               | x               |
| Brace                                                 | x               | x               |
| Building Pad                                          |                 | x               |
| Ceiling                                               |                 | x               |
| Curves (Model, Detail, Room Boundary)                 | x               | x               |
| Direct Shape                                          | x               | x               |
| Duct                                                  | x               | x               |
| Face Wall                                             | x               |                 |
| Family Instance                                       | x               | x               |
| Floor                                                 | x               | x               |
| Group                                                 |                 | x               |
| Level                                                 | x               | x               |
| Opening (Wall, Vertical, Shaft)                       | x               | x               |
| Project Information                                   |                 | x               |
| Railing                                               | x               | x               |
| Roof (Extrusion, Footprint)                           | x               | x               |
| Room                                                  |                 | x               |
| Stair                                                 |                 | x               |
| Topography                                            | x               | x               |
| View (FloorPlan, CeilingPlan, Elevation, Section, 3D) |                 | x               |
| Wall                                                  | x               | x               |

#### Raw Geometry

Generally speaking, Revit doesn't support raw geometry as it deals with families. Nonetheless, we've made it simple to receive some types of geometry directly, without the need of specifying family type, name or any other parameter.

| Type         | Speckle > Revit                          |
| ------------ | ---------------------------------------- |
| Line & Curve | Model Curves                             |
| Brep         | Direct Shape with Generic Model category |
| Mesh         | Direct Shape with Generic Model category |



### Non Supported Elements

Various element and data types do not have a direct conversions in Revit. Therefore sending Numbers, Points, Vectors or other non supported elements will have no effects. 

To use such data types in Revit you should check our our [Dynamo Connector](/user/dynamo)

:::tip

If non supported elements are received in this connector, no errors are thrown.

:::

## Updating Elements

The connector takes care of updating received elements automatically when possible (instead of deleting and re-creating them), this is great as dimensions and other annotations won't be lost.

This only works when the application sending the elements sets a unique ID on them, currently this works with elements being sent from Rhino, Grasshopper and Revit.



## BIM Data

All Revit type and instance parameters are automatically attached to each element when it's sent out of Revit.

You can inspect them from our Web interface and from any other applications that allow to explore this metadata (eg Grasshopper, Dynamo, Unity...).

![image-20210303224640764](./img-revit/image-20210303224640764.png)