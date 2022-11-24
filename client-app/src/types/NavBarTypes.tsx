type Endpoint = {
    displayName: string,
    route: string,
    component: () => JSX.Element
};

interface NavBarProps {
    endpoints: Endpoint[];
};

export type { Endpoint, NavBarProps };