export const getText = () => {
    const url = `https://baconipsum.com/api/?type=meat-and-filler&paras=1`;
    return fetch(url);
}