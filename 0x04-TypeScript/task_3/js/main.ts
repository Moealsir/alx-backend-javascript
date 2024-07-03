/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as crud from "./crud";

const row: RowElement = {
  firstName: "Ahmed",
  lastName: "Suliman",
};

const newRowID: RowID = crud.insertRow(row);
const updatedRow: RowElement = {...row, age: 23};
crud.updateRow(newRowID, updatedRow);
crud.deleteRow(newRowID);