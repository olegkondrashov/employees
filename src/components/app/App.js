import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './App.css';

function App() {

  const data = [
    {name: 'Alex M.' , salary: 800, increase: false, id: 1},
    {name: 'Anna K.' , salary: 1600, increase: true, id: 2},
    {name: 'Ivan D.' , salary: 2500, increase: false, id: 3},
  ];

  return (
    <div className="app">
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
      </div>
    </div>
  );
}

export default App;
