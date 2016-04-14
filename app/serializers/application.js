import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	normalizeFindAllResponse(store, type, payload) {
    var arraySchool=[];
    for(var i = 0;i<payload.Schools.length;i++)
    {
      arraySchool.push({
            id: payload.Schools[i].SchoolSID,
            type: 'schools',
            attributes: {
              result: payload.result,  
              count: i,  
              nameSchool:  payload.Schools[i].School, 
              distritSchool: payload.Schools[i].District,
            }
          }
      );
    }
    return {
      data: arraySchool,
    };
  }
});
