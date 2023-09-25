import { parse } from 'node-html-parser';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React from 'react';

function Programme(props) {
  const { post } = props;
  const defaultIndex = 0;
  const [currentTab, setCurrentTab] = useState(defaultIndex);

  const handleTabClick = (index) => {
    setCurrentTab(index);
  }

  const htmlContent = post.content.rendered;
  const doc = parse(htmlContent);
  
  const programmeTabs = doc.querySelectorAll('.programme-tab > div');
  const programmeContents = doc.querySelectorAll('.programme-content');
  
  // Créer un tableau de données à partir des éléments
  const tabData = [];
  programmeTabs.forEach((tab, index) => {
    const title = tab.innerHTML;
    const content = programmeContents[index].innerHTML;
    tabData.push({ id: index, title, content });
  });






  const [isMobileView, setIsMobileView] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 960px)'); // Define the breakpoint
    setIsMobileView(mediaQuery.matches); // Set initial state based on screen size

    const handleResize = (event) => setIsMobileView(event.matches);
    mediaQuery.addListener(handleResize); // Listen for changes in screen size
    return () => mediaQuery.removeListener(handleResize); // Remove listener when component unmounts
  }, []);

  return (
    <div>
      {isMobileView ? 
      
      <div id={post.slug}>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} className="container" />
      </div>
      
      :
    <div id={post.slug}>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <div className="container">
        <Tabs
          onSelect={(index) => handleTabClick(index)}
          selectedIndex={currentTab}
          className="tabs mt-12 mb-8"
        >
        <TabList>
          {tabData.map((tab) => (
            <Tab key={tab.id} dangerouslySetInnerHTML={{ __html: tab.title }} />

          ))}
        </TabList>
        {tabData.map((tab) => (
          <TabPanel key={tab.id}>
            <div dangerouslySetInnerHTML={{ __html: tab.content }}></div>
          </TabPanel>
        ))}
      </Tabs>
      </div>
    </div>}
    </div>
  );






}
export default Programme;