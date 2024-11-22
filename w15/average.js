const calcAverage = (data) => {
    const allData = data.filter(obj => obj.total !== undefined);
    console.log(allData)

    const total = allData.reduce((sum, obj) => sum + obj.total, 0);
    console.log(total);

    const avg = total/allData.length;
    console.log(avg);
    return avg;
};

export { calcAverage };