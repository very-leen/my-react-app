# REACT Full Course
- Day 1:  Introduction to react components.
         Created Header, Food & Footer components

- Day 2: *Card components*: created card component with img, header and paragraph
         learnt naming convention for className in react
         -How to add image to component via importation

       :  *CSS styling*: Methods of styling: - External
                                            - Module
                                            - inline
         -Inline styling is written in JS syntax

- Day 3: *Props, PropTypes & defaultProps*
        -created reusable student component
        -how to implement defaultProps in React19

- Day 4: *Conditional rendering*
        -UserLogIn.jsx
        -conditional rendering using ternary operator

       : *Rendering Lists*
        -List.jsx
        -Implemented sort() & filter()
        _Using shortCircuiting (&&) in place of ternary operator

- Day 5: *Click events*
        -Button.jsx
        -Listened for callbacks with & without parameters.
        -Listened and captured the event object & used it to change textContent
        -ProfilePicture.jsx
        -Added click eventListener to image and captured the event object and used it to hide image    onClick.
        -**Summary: event object can be used for multiple operations

       : *useState hook*
        - MyComponents.jsx
        -useState() = [stateVariable, setterFunction]
        - setterFunction changes value of stateVariable
        - to assign stateVariable default value: 
                - const [stateVariable, setter] = useState("defValue");
        - setter function must begin with keyword 'set' eg: setCount        