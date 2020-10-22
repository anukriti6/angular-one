export interface MessageSnackbarData {
  message: string;
  duration: number;
  type: SnackBarType;
}

export type SnackBarType ="INFO" | "ERROR" | "SUCCESS";

