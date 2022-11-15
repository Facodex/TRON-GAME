/**
 * This function make a simple petition, receive a setState to save the data in that state
 */
export async function petition ( url, setState ){
    const response = await fetch(url);
    const data = await response.json()
    setState(data.data);
}