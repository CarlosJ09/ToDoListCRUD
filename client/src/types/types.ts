export interface Task {
  id?: number;
  title: string;
  description: string;
  done?: boolean | number;
  createAt?: string;
}

export interface children {
  children?: JSX.Element | JSX.Element[];
}

export interface Props {
  task: {
    id?: number;
    title: string;
    description: string;
    done?: boolean | number;
    createAt?: string;
  };
}
