export interface AppResponseDto {
  statusCode: number;
  data: OptimazedImageResponseDto;
  message: string;
}

export interface OptimazedImageResponseDto {
  htmlCode: string;
  fileName: string;
}
