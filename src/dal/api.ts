import axios, {AxiosResponse} from "axios"

const instance = axios.create({
    baseURL: "http://135.181.30.244:27007/api/vacancies/",
})

export const API = {
    getVacancies() {
        return instance.get<VacanciesResponseType>('vacancies', )
    }
}



export interface VacanciesResponseType {
    next:         string;
    previous:     null;
    total_count:  number;
    page_count:   number;
    current_page: number;
    results:      Result[];
}

export interface Result {
    id:                string;
    category:          Category;
    occupation_types:  Category[];
    company:           null;
    currency:          null;
    extra:             Category[];
    position:          string;
    address:           string;
    salary_from:       number;
    salary_to:         number;
    hide_salary:       boolean;
    salary_comment:    string;
    work_experience:   string;
    education:         Education;
    description:       string;
    show_contact_info: boolean;
    with_resume:       boolean;
    created_at:        Date;
    is_archive:        boolean;
    hits:              number;
    responses:         number;
    city:              number;
    author:            number;
}

export interface Category {
    id:    number;
    title: string;
}

export enum Education {
    Начальное = "Начальное",
    НеИмеетЗначения = "Не имеет значения",
    Среднее = "Среднее",
}
