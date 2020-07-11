async function getData() {
    const promise = await fetch();
    const data = await promise.json();

    return data;
}

export default getData;

