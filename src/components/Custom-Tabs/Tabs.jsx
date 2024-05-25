import CustomTab from "./CustomTab";
import React from 'react'

function Tabs() {
    const tabscontent = [
        {
          label: "Tab 1",
          content: <div>This is content for Tab 1</div>,
        },
        {
          label: "Tab 2",
          content: <div>This is content for Tab 2</div>,
        },
        {
          label: "Tab 3",
          content:<div> Some random content</div>,
        },
      ];
  return <CustomTab tabs={tabscontent}/>
}

export default Tabs
