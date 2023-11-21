# React Native Custom Expandable Button


React Native Custom Expandable Button is an npm package that provides an animated and customizable button component. This button expands when clicked, grabs attention for a specific duration, and then smoothly reverts to its original size.

## Installation

To add the package to your project, use the following command:

```bash
npm install react-native-custom-expandable-button
```

```javascript

import React from 'react';
import { View } from 'react-native';
import CustomExpandableButton from 'react-native-custom-expandable-button';

const App = () => {
  return (
    <View>
      <CustomExpandableButton
        title="Click Me"
        width={140}
        height={40}
        borderRadius={5}
        borderWidth={2}
        borderColor="#3498db"
      />
    </View>
  );
};

export default App;
```


# Custom Features

Expandable Animation: Adds an expanding animation when clicked, creating an interactive and engaging button.

Customizable: Allows users to adjust properties like width, height, corner radius, and border thickness.

Color Options: Customize the border color and background color during the click animation.