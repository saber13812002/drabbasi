
export interface SessionBody {
    "soap:Body": SoapBody;
}

export interface SoapBody {
    GetSessionsResponse: GetSessionsResponse;
}

export interface GetSessionsResponse {
    "@xmlns":          string;
    GetSessionsResult: GetSessionsResult;
}

export interface GetSessionsResult {
    SessionInfo: SessionInfo[];
}

export interface SessionInfo {
    ID:           string;
    Number:       string;
    Name:         string;
    Date:         string;
    Master:       string;
    CourseName:   string;
    CategoryID:   string;
    Category:     string;
    FilmURL:      string;
    FilmSize:     string;
    FilmDuration: string;
    SesDocIDs:    string;
}