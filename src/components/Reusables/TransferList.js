import React, { useState } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
  ListItemIcon,
  Checkbox,
} from "@mui/material";

const TransferList = ({ left, right, onChange }) => {
  const [checked, setChecked] = useState([]);
  const [leftItems, setLeftItems] = useState(left);
  const [rightItems, setRightItems] = useState(right);

  const handleToggle = (item) => () => {
    const currentIndex = checked.indexOf(item);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(item);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items) =>
    checked.filter((item) => items.indexOf(item) !== -1).length;

  const handleAllRight = () => {
    setRightItems(rightItems.concat(leftItems));
    setLeftItems([]);
  };

  const handleAllLeft = () => {
    setLeftItems(leftItems.concat(rightItems));
    setRightItems([]);
  };

  const handleCheckedRight = () => {
    setRightItems(
      rightItems.concat(checked.filter((item) => leftItems.includes(item)))
    );
    setLeftItems(leftItems.filter((item) => !checked.includes(item)));
    setChecked([]);
    onChange &&
      onChange(
        rightItems.concat(checked.filter((item) => leftItems.includes(item))),
        "right"
      );
  };

  const handleCheckedLeft = () => {
    setLeftItems(
      leftItems.concat(checked.filter((item) => rightItems.includes(item)))
    );
    setRightItems(rightItems.filter((item) => !checked.includes(item)));
    setChecked([]);
    onChange &&
      onChange(
        leftItems.concat(checked.filter((item) => rightItems.includes(item))),
        "left"
      );
  };

  const customList = (title, items) => (
    <List>
      {items.map((item) => (
        <ListItem key={item} button onClick={handleToggle(item)}>
          <ListItemIcon>
            <Checkbox
              checked={checked.indexOf(item) !== -1}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>{customList("Available Items", leftItems)}</Grid>
      <Grid item>
        <Button onClick={handleAllRight} disabled={leftItems.length === 0}>
          ≫
        </Button>
        <Button
          onClick={handleCheckedRight}
          disabled={numberOfChecked(leftItems) === 0}
        >
          {">"}
        </Button>
        <Button
          onClick={handleCheckedLeft}
          disabled={numberOfChecked(rightItems) === 0}
        >
          {"<"}
        </Button>
        <Button onClick={handleAllLeft} disabled={rightItems.length === 0}>
          {"≪"}
        </Button>
      </Grid>
      <Grid item>{customList("Selected Items", rightItems)}</Grid>
    </Grid>
  );
};

export default TransferList;
