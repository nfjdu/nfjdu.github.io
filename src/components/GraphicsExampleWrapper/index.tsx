import { Box } from "@mui/material";

interface ExampleProps {
  children: React.ReactNode;
}

export function GraphicsExampleWrapper({ children }: ExampleProps) {
  return (
    <Box
      component='div'
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "400px",
        borderRadius: "6px",
        border: (theme) => `2px dashed ${theme.palette.divider}`,
        position: "relative",
      }}
    >
      {children}
    </Box>
  );
}
