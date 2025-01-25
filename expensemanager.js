import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabList, TabPanel } from '@/components/ui/tabs';
import { Tab } from '@/components/ui/tab';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Expense Tracker</h1>
        <div className="flex space-x-4">
          <Button variant="ghost">Settings</Button>
          <Button variant="ghost">Profile</Button>
        </div>
      </header>

      <Tabs defaultIndex={0} className="flex-grow">
        <TabList className="flex justify-around py-2">
          <Tab>Accounts</Tab>
          <Tab>Calendar</Tab>
          <Tab>Chart</Tab>
          <Tab>Budgets</Tab>
          <Tab>Bills</Tab>
        </TabList>

        <TabPanel>
          <div className="p-4">
            <h2 className="text-lg font-semibold">Create Account</h2>
            <div className="space-y-4">
              <Input placeholder="Account Name" />
              <Input placeholder="Initial Balance" type="number" />
              <Button className="w-full">Create Account</Button>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Your Accounts</h3>
              <Card className="mt-4 bg-gray-900">
                <CardContent>
                  <p className="text-xl">Default Account</p>
                  <p className="text-gray-400">Balance: $7,072.47</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="p-4">
            <h2 className="text-lg font-semibold">Calendar</h2>
            <div className="text-center mt-4">No transactions in this day.</div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="flex items-center justify-center h-64">
            <p>Swipe left or right to see charts from other periods.</p>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="flex flex-col items-center justify-center h-64">
            <p>Start saving money by creating budgets.</p>
            <Button>Create Budgets</Button>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="flex flex-col items-center justify-center h-64">
            <p>No bills yet. Tap the "+" button to add.</p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default App;
