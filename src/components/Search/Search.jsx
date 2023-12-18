
import "./Search.css"


function Search({upadateSearchTerm}) {

    return (
        <div className="Search-main-div mb-6">
            <input 
                id= "pokemon-name-search" 
                type="text" 
                placeholder="Search Pokemon..." 
                onChange={(e) => upadateSearchTerm(e.target.value) }
            />
        </div>
        
            
        
    )
}

export default Search;