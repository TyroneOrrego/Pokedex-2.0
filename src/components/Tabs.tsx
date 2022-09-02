import React from "react";

import {
  Indicator,
  TabHeaderItem,
  TabItem,
  TabsBody,
  TabsContainer,
  TabsHeader,
} from "./Tabs.styles";

interface TabsProps {
  initial: string;
}

interface TabProps {
  label: string;
}

interface TabComposition {
  Tab: React.FC<TabProps>;
}

interface ITabsContext {
  activeTab: string;
  setActiveTab: (label: string) => void;
}

export const TabsContext = React.createContext<ITabsContext | undefined>(
  undefined
);

export const Tabs: React.FC<TabsProps> & TabComposition = ({
  children,
  initial,
}) => {
  const [activeTab, setActiveTab] = React.useState<string>(initial);
  const current = (children as any)?.find(
    (child: any) => child.props.label === activeTab
  );
  const activeIndex = (children as any).indexOf(current);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <TabsContainer>
        <TabsHeader>
          {React.Children.map(children, (child: any) => {
            return (
              <TabHeaderItem
                active={child?.props?.label === activeTab}
                totalTabs={(children as any).length}
                onClick={() => setActiveTab(child.props.label)}
              >
                {child?.props?.label}
              </TabHeaderItem>
            );
          })}
        </TabsHeader>
        <Indicator
          totalTabs={(children as any).length}
          indexActive={activeIndex}
        />
        <TabsBody>{children}</TabsBody>
      </TabsContainer>
    </TabsContext.Provider>
  );
};

export const Tab: React.FC<TabProps> = ({ children, label }) => {
  const context = React.useContext(TabsContext);

  return context?.activeTab === label ? <TabItem>{children}</TabItem> : null;
};

Tabs.Tab = Tab;
