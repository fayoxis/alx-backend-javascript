export function insertRow(newRow) {
  console.log('Insert row', newRow);
  return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(rowID) {
  console.log('Delete row id', rowID);
  return;
}

export function updateRow(rowID, updatedRow) {
  console.log(`Update row ${rowID}`, updatedRow);
  return rowID;
}
