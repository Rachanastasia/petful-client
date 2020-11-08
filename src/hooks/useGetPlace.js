function useGetPlace(arr, name) {
    let before = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === name) {
            break;
        }
        before++;
    }

    return before
}

export default useGetPlace;