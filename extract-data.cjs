const XLSX = require('xlsx');

// Helper to convert Excel serial date to readable format
function excelDateToJSDate(serial) {
  if (typeof serial !== 'number') return serial;
  const utc_days = Math.floor(serial - 25569);
  const utc_value = utc_days * 86400;
  const date_info = new Date(utc_value * 1000);
  const month = date_info.getUTCMonth() + 1;
  const day = date_info.getUTCDate();
  return day + '/' + month;
}

const workbook = XLSX.readFile('./data/10-OCT-2025UK.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const jsonData = XLSX.utils.sheet_to_json(worksheet, {header: 1, defval: ''});

// Define reservoir rows
const reservoirs = [
  { row: 16, name: 'Kouris', region: 'Southern Conveyor' },
  { row: 17, name: 'Kalavasos', region: 'Southern Conveyor' },
  { row: 18, name: 'Lefkara', region: 'Southern Conveyor' },
  { row: 19, name: 'Dipotamos', region: 'Southern Conveyor' },
  { row: 20, name: 'Germasoyeia', region: 'Southern Conveyor' },
  { row: 21, name: 'Arminou', region: 'Southern Conveyor' },
  { row: 22, name: 'Polemidia', region: 'Southern Conveyor' },
  { row: 23, name: 'Achna', region: 'Southern Conveyor' },
  { row: 26, name: 'Asprokremmos', region: 'Paphos' },
  { row: 27, name: 'Kannaviou', region: 'Paphos' },
  { row: 28, name: 'Mavrokolympos', region: 'Paphos' },
  { row: 31, name: 'Evretou', region: 'Chrysochou' },
  { row: 32, name: 'Argaka', region: 'Chrysochou' },
  { row: 33, name: 'Pomos', region: 'Chrysochou' },
  { row: 34, name: 'Agia Marina', region: 'Chrysochou' },
  { row: 37, name: 'Vyzakia', region: 'Nicosia' },
  { row: 38, name: 'Xyliatos', region: 'Nicosia' },
  { row: 39, name: 'Kalopanagiotis', region: 'Nicosia' },
  { row: 62, name: 'Tamassos', region: 'Recharge/Other' },
  { row: 63, name: 'Klirou-Malounta', region: 'Recharge/Other' },
  { row: 64, name: 'Solea', region: 'Recharge/Other' }
];

console.log('Reservoir data for October 10, 2025:\n');
reservoirs.forEach(res => {
  const row = jsonData[res.row];
  const totalSince = row[5] || 0;
  const numericTotalSince = typeof totalSince === 'number' && !isNaN(totalSince) ? totalSince : 0;

  console.log('  { name: "' + res.name + '", ' +
    'capacity: ' + row[3] + ', ' +
    'inflow: { last24Hours: ' + row[4] + ', totalSince: ' + numericTotalSince.toFixed(3) + ' }, ' +
    'storage: { current: { amount: ' + row[6] + ', percentage: ' + row[7].toFixed(1) + ' }, ' +
    'lastYear: { amount: ' + row[8] + ', percentage: ' + row[9].toFixed(1) + ' } }, ' +
    'maxStorage: { amount: ' + row[10] + ', date: "' + excelDateToJSDate(row[11]) + '" }, ' +
    'region: "' + res.region + '" },');
});

// Water transfer info
const waterTransferRow = jsonData[44];
const transferAmount = waterTransferRow[8] || 0;
console.log('\nWater transferred from Arminou to Kouris:', transferAmount, 'MCM');
