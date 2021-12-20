import axios from "axios"

const instance = axios.create({
    baseURL: "http://135.181.30.244:27007/api/",
})

export const API = {
    getVacancies() {
        return instance.get<ResponseType<Vacancy>>('vacancies/vacancies',)
    },
    getSummaries() {
        return instance.get<ResponseType<Summary>>('summaries',)
    }
}


export type ResponseType<D = {}> = {
    next: string;
    previous: null;
    total_count: number;
    page_count: number;
    current_page: number;
    results: D[];
}

export type Vacancy = {
    id: string;
    category: CategoryVacancy;
    occupation_types: CategoryVacancy[];
    company: null;
    currency: null;
    extra: CategoryVacancy[];
    position: string;
    address: string;
    salary_from: number;
    salary_to: number;
    hide_salary: boolean;
    salary_comment: string;
    work_experience: string;
    education: EducationVacancy;
    description: string;
    show_contact_info: boolean;
    with_resume: boolean;
    created_at: Date;
    is_archive: boolean;
    hits: number;
    responses: number;
    city: number;
    author: number;
}

export interface CategoryVacancy {
    id: number;
    title: string;
}

export enum EducationVacancy {
    Начальное = "Начальное",
    НеИмеетЗначения = "Не имеет значения",
    Среднее = "Среднее",
}


export interface Summary {
    id: number;
    visibility: boolean;
    category: Category;
    employment_type: EmploymentType;
    wage_from: number;
    wage_to: number;
    currency: string;
    sex: Sex;
    first_name: string;
    last_name: string;
    patronymic: Patronymic;
    seeker: number;
    skype: null | string;
    email_com: null | string;
    photo: null | string;
    desiredposition: Desiredposition[];
    another_city: boolean;
    work_city: WorkCity[];
    phone_number: string;
    work_experience_exist: boolean;
    workexperience: Workexperience[];
    portfolio: null | string;
    education: Education[];
    coursestraining: any[];
    knownlanguage: any[];
    search_relevance: SearchRelevance;
    computerskills: null;
    recommendation: any[];
    additionalinformation: null;
    disability: null;
    in_english: boolean;
    created_at: Date;
    updated_at: Date;
    hits: number;
    birthday: Date | null;
}

export enum Category {
    Категория4 = "Категория_4",
}

export interface Desiredposition {
    id: number;
    position: string;
}

export interface Education {
    id: number;
    education_level: string;
    educational_institution: string;
    faculty_speciality: string;
    date_from: Date;
    date_to: Date;
    city: number;
}

export enum EmploymentType {
    FullTimeJob = "Full time job",
}

export enum Patronymic {
    Empty = "",
    Іванович = "Іванович",
}

export enum SearchRelevance {
    InUrgentSearch = "In urgent search",
}

export enum Sex {
    Female = "Female",
    Male = "Male",
    NotIndicated = "Not indicated",
}

export interface WorkCity {
    id: number;
    display_name: DisplayName;
}

export enum DisplayName {
    ŻywiecSilesiaPoland = "Żywiec, Silesia, Poland",
    ЛьвовУкраина = "Львов, Украина",
}

export interface Workexperience {
    id: number;
    company_name: string;
    position: string;
    date_from: Date;
    date_to: Date;
    resp_ach: string;
    category_exp: Category;
}
