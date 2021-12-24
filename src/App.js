import { Tab } from "@headlessui/react";
import Modal from "./Modal";

export default function App() {
  return (
    <div>
      <Tab.Group>
        <Tab.List>
          <Tab>
            {({ selected }) => (
              <div className={'p-2 ' + (selected ? 'text-red-500 font-bold' : 'text-black')}>Tab 1</div>
            )}
          </Tab>
          <Tab>
            {({ selected }) => (
              <div className={'p-2 ' + (selected ? 'text-red-500 font-bold' : 'text-black')}>Tab 2</div>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels as="div" className="p-4 border rounded">
          <Tab.Panel>
            <div>Tab 1 Content</div>
            <Modal />
          </Tab.Panel>
          <Tab.Panel>
            <div>Tab 2 Content</div>
            <Modal />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
