import React, { useState } from "react";

import { Settings, Plus, Search } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

import { MenuBarBlocks } from "./constants";

const Menu = ({ showMenu }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  return (
    <div className="flex">
      <MenuBar showMenu={showMenu} title="Notes">
        {MenuBarBlocks.main.map(menuBarBlock => (
          <MenuBar.Block
            active={menuBarBlock.active}
            count={menuBarBlock.count}
            key={menuBarBlock.label}
            label={menuBarBlock.label}
          />
        ))}
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () => setIsSearchCollapsed(prevState => !prevState),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
        {MenuBarBlocks.segments.map(menuBarBlock => (
          <MenuBar.Block
            count={menuBarBlock.count}
            key={menuBarBlock.label}
            label={menuBarBlock.label}
          />
        ))}
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Settings,
            },
            {
              icon: Plus,
            },
            {
              icon: Search,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </MenuBar.SubTitle>
        {MenuBarBlocks.tags.map(menuBarBlock => (
          <MenuBar.Block
            count={menuBarBlock.count}
            key={menuBarBlock.label}
            label={menuBarBlock.label}
          />
        ))}
      </MenuBar>
    </div>
  );
};

export default Menu;
