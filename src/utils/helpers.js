import { saveAs } from 'file-saver';
export const downloadData = (data, fileName) =>  {
  if(!data) {
    console.error('Data not coming')

  }
  const blob = new Blob([JSON.stringify(data)], { type: 'application/json' })
  saveAs(blob, `${fileName}.json`)
}