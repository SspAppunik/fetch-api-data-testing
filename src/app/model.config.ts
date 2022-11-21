export interface ICommonResponse {
    message: String;
    data: IKPIResponse;
}

export interface IKPIResponse {
    company: String;
    companyId: Int16Array;
    kpiData: IKPIList; 
}


export interface IKPIList {
    ["Does the company have a supplier code of conduct?"] : Array<ITest>
}

export interface ITest {    
    kpi: string;
    text_answer: string;
    text_context: string;
    text_score: string;
    score: string;
    flag: string;
    uuid: string;
    validation: string;
    disclosed: string;
    captured: string;
    evidence: string;
    answer: string;
    docType: string;
    modelType: string;
}