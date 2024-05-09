export interface Articles {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    id:           number;
    title:        string;
    url:          string;
    image_url:    string;
    news_site:    string;
    summary:      string;
    published_at: string;
    updated_at:   Date;
    featured:     boolean;
    launches:     string;
    events:       string;
}


export interface Detail {
    id:           number;
    title:        string;
    url:          string;
    image_url:    string;
    news_site:    string;
    summary:      string;
    published_at: string;
    updated_at:   Date;
    featured:     boolean;
    launches:     [];
    events:      [];
}
