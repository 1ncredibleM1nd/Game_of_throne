export default class GotService {
	_apiBase = 'https://www.anapioficeandfire.com/api'
	getResource = async (url) => {
		const res = await fetch (url);
		if ( !res.ok) {
			throw new Error (`Could`)
		}
		return await res.json ();
	};
	
	getAllCharacters = async () => {
		const res= await this.getResource (`${this._apiBase}/characters?page=5&pageSize=10`);
		return res.map(this._transformCharacter)
	};
	
	getCharacter = async (id) => {
		const character = await this.getResource (`${this._apiBase}/characters/${id}`);
		return this._transformCharacter(character);
	};
	getAllHouses = () => {
		return this.getResource (`${this._apiBase}/houses/`);
	};
	_transformCharacter(char){
		return{
			name:char.name,
			gender:char.gender,
			born: char.born,
			died:char.died,
			culture:char.culture
		}
	}
}

const got = new GotService ();
got.getAllCharacters ()
	.then (res => console.log (res));