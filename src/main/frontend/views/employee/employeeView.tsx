
import {useEffect, useState} from 'react';
import EmployeeModel from "Frontend/generated/com/prompt/crudchat/entities/EmployeeModel";
import {Grid, GridColumn} from "@vaadin/react-components";
import {EmployeeService} from "Frontend/generated/endpoints";

export default function EmployeeView() {
    const [employees, setEmployees] = useState<EmployeeModel[]>([]);
    const [selected, setSelected] = useState<EmployeeModel | null | undefined>();


    useEffect(() => {
       // @ts-ignore
        EmployeeService.getAllEmployees().then(setEmployees)

    }, []);
    return (
        <div className="">
            <div className="p-m flex gap-m">
                <Grid
                    items={employees}
                    onActiveItemChanged={e => setSelected(e.detail.value)}
                    selectedItems={[selected]}>

                    <GridColumn path="firstName"/>
                    <GridColumn path="lastName"/>
                    <GridColumn path="email"/>
                    <GridColumn path="company.name" header="Company name"/>
                </Grid>


            </div>
        </div>
    );
}