# Material UI Customize Component Library

## Steps to use the library

1. Clone the repository using ``` git clone https://github.com/mharshita/ui-library.git ```.

2. Run ``` npm install ```

3. Run ``` npm run build ```

4. Run ``` npm pack ```

## How to run and view components in Storybook

1. Run ``` npm install ```

2. Run ``` npm run storybook ```

3. Open ``` localhost:6006 ``` in the browser.

## Steps to integrate the library to your project

1. Do all the steps from _Steps to use the library_ from above.

2. Copy the location of the ```.tgz``` file created after packing.

3. In the project run: ```npm install /path-to-your-library/your-package-name-version.tgz```.

4. Use the Custom components from the library by importing them into your project components:
- ```import <component_name> from "ui-library/dist/<component_name>.js";```
- example: ```import CustomCard from "ui-library/dist/CustomCard.js";```

5. Use the components as usual by passing the values as required. All components and their variants are list below in the next section.

## Overview of components present in the library

1. Button

- variants:
    - Primary
    - Secondary
    - Ghost
    - isLoading

- Props:
    - text
        - type: string
        - value: text inside button

    - color
        - type: string
        - value: primary / secondary / ghost
    
    - isLoading
        - type: bool
        - value: true / false

    - onClick
        - type: function

    - fullWidth
        - type: bool
        - value: true / false

    - size
        - type: string
        - value: small / medium / large

2. Card

- variants:
    - elevated
    - flat

- Props:
    - header
        - type: string
        - value: text inside card header

    - content
        - type: string
        - value: text inside card content

    - footer
        - type: string
        - value: text inside card footer

    - variant
        - type: string
        - value: elevated / flat

3. Modal

_Modal is draggable_

- Props:
    - open
        - type: bool
        - value: true / false

    - handleClose
        - type: function
    
    - header
        - type: string
        - value: header of modal
    
    - content
        - type: string
        - value: content of modal

    - buttonText (_not required, add only if you want to add button in modal footer_)
        - type: string
        - value: text on button of modal

