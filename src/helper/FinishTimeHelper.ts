const {ceil} = Math;

export default class FinishTimeHelper {
    
    static generateTime = (from:Date, to:Date) => {
     const firstYear = from.getFullYear();
    const lastYear = to.getFullYear();
    const firstMoth = from.getMonth() + 1;
    const lastMoth = to.getMonth() + 1;
    const currentMoth = firstMoth - lastMoth;
    const currentYear = (lastYear - firstYear) * 12;
    const firstCount = firstMoth ;
    const lastCount = currentMoth > 0 ? currentYear + currentMoth : currentYear - currentMoth;

    const defaultValues = [
        {
            year:firstYear,
            count:firstCount,
            chorak:ceil(firstMoth / 3)
        },
        {
             year:lastYear,
            count:lastCount,
            chorak:ceil(lastMoth / 3) 
        }
    ]


    return {
        defaultValues,
        minCount:ceil(firstCount / 3),
        maxCount:ceil(lastCount / 3)
    }
    }

    static generateCount = (list:{
    year: number;
    count: number;
    chorak:number;
}[]) => list.map(i => ceil(i.count / 3))

static changeDates = (
    nums:number[],
     list:{
    year: number;
    count: number;
    chorak:number;
}[]) => {

    const [firstCount, lastCount] = nums;
    const [firstDate, lastDate] = list;

    return [
        {
            ...firstDate,
            count:firstCount * 3,
            chorak:firstCount % 3,
            
        },
        {
            ...lastDate,
            count:lastCount * 3,
            chorak:lastCount % 3
        }
    ]
}
}