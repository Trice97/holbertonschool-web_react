import { RowID, RowElement } from './interface';

// Déclarations de types pour les fonctions CRUD
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;