import User from "./user.interface";

export default interface ResponseWithUser {
    _meta: _Meta;
    result: User[]
}

export interface _Meta {
    success: boolean;
    code: number;
    message: string;
    totalCount: number;
    pageCount: number;
    currentPage: number;
    perPage: number;
    reateLinit: RateLimit;
}

export interface RateLimit {
    limit: number;
    remaining: number;
    reset: number;
}