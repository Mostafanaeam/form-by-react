
import './App.css'
import { useState } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';        

function App() {
    const [value, setValue] = useState('');
    return (
    <PrimeReactProvider>
      <div className="card flex justify-content-center">
            <FloatLabel>
                <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="username">Username</label>
                <Button label="Submit" icon="pi pi-check" onClick={() => console.log(value)} />
            </FloatLabel>
        </div>
    </PrimeReactProvider>
  )
}

export default App
