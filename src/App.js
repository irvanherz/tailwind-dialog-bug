import { Tab } from "@headlessui/react";
import Modal from "./Modal";

export default function App() {
  return (
    <div>
      <Tab.Group>
        <Tab.List>
          <Tab key="0">
            {({ selected }) => (
              <div className={'p-2 ' + (selected ? 'text-red-500 font-bold' : 'text-black')}>Tab 0</div>
            )}
          </Tab>
          <Tab key="1">
            {({ selected }) => (
              <div className={'p-2 ' + (selected ? 'text-red-500 font-bold' : 'text-black')}>Tab 1</div>
            )}
          </Tab>
          <Tab key="2">
            {({ selected }) => (
              <div className={'p-2 ' + (selected ? 'text-red-500 font-bold' : 'text-black')}>Tab 2</div>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels as="div" className="p-4 border rounded" >
          <Tab.Panel key="0">
            <div>Tab 0 Content</div>
            <div>Try navigate to any tab</div>
          </Tab.Panel>
          <Tab.Panel key="1">
            <div>Tab 1 Content</div>
            <Modal />
          </Tab.Panel>
          <Tab.Panel key="2">
            <div>Tab 2 Content</div>
            <Modal />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
