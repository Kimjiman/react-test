export interface BaseModel {}

export interface RouteComponent extends BaseModel {
    path: string;
    name: string;
    element?: JSX.Element;
}
