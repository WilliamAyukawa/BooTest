import	React	from	'react';
import	{	Text,	View	}	from	'react-native';

class Morgana extends React.Component {
	render(){
	return	(
		<View>
			<Text>Texto da Morgana</Text>
			<Text>{this.props.nome}</Text>
		</View>
	)
	}
}

export default Morgana;