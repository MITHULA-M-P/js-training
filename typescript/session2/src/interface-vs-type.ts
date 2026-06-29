// Interface is better because API responses are object shapes.

interface PaginationResponse<T> {
    page: number;
    pageSize: number;
    total: number;
    data: T[];
}

// Type alias is better for unions.

type StringOrStrings = string | string[];

// Interface can be extended.

interface AppNotification {
    title: string;
    message: string;
}

// Type alias for callback.

type NumberProcessor = (num: number) => void;

// Union type.

type HttpMethod =
    | "GET"
    | "POST"
    | "PUT"
    | "DELETE"
    | "PATCH";