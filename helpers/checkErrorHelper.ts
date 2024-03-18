// export function checkError(error: unknown) {
// 	if (error instanceof Error) {
// 		return error;
// 	}
// }

// try {
// } catch (error) {
//   switch (true) {
//       case error instanceof ClientError:
//           console.log("Client-side error:", error.message);
//           response.status(400).json(`Client Error: ${error.message}`);
//           break;
//       case error instanceof ServerError:
//           console.log("Server-side error:", error.message);
//           response.status(500).json(`Server Error: ${error.message}`);
//           break;
//       default:
//           console.log("Unknown error:", error.message);
//           response.status(500).json(`Unknown Error: ${error.message}`);
//           break;
//   }
// }
