export default {
    name: "products",
    type: "document",
    title : "Products",
    fields : [
        
        {
            title:"Product Name",
            name :"productname",
            type :"string"
            },
        {
         name: "sellername",
        type : "string",
        title : "Seller Name"
        },
        
        {
        title :"Slug",
        name :"slug",
        type:"slug",
        options: {
            source :"productname",
            maxLenght: 500,    // will be ignored if slugify is set
            slugify: (input :string) => input.toLowerCase().replace(/\s+/g,'-').slice(0,200)
        }
        },
        {
           name :"description",
           title:"Description",
           type: "string"
        },
        {
        name :"image",
        type:'array',
        title :"Image",
        of : [
            {
            type :"image",
            fields: [
                {
                    name :"alt",
                    type:"text",
                    title :"Alternative text"
                }
            ]
            }
        ]
        },
        {
            name :"price",
            type:"number",
            title :"Price"
        },
       
    ]
}