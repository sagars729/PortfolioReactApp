import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Footer() {
	return (
		<footer>
			<table>
				<tbody>
				<tr>
				<td>
					<Box sx={{textAlign: 'center'}}> 
						<a href='/'>Go Home</a> 
					</Box>
				</td>
				<td>
					<Box sx={{textAlign: 'center'}}> 
						<a href='https://www.umd.edu'>UMD</a> 
					</Box>
				</td>
				<td>
					<Box sx={{textAlign: 'center'}}> 
						<a href='/'>About Me</a> 
					</Box>
				</td>
				</tr>
				</tbody>
			</table>
		</footer>

	);

}

export default Footer
