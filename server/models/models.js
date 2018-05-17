var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const AuthorSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Author must have a Name"], 
        minlength: [3,"Name must be more than 3 characters"],
        validate: {
			validator: function(value){
				return /^[A-z\s]+$/.test(value)
			},
			message: "Name can only contain letters"
		}
    },
    quotes : [{type: Schema.Types.ObjectId, ref: 'Quote'}]
}, {timestamps: true});

const QuoteSchema = new mongoose.Schema({
    quote : {
        type: String, 
        minlength: [3, "Quote must have atleast 3 characters"]
    },
    votes : {
        type: Number, 
        default: 0
    },
    quoteBy : {type: Schema.Types.ObjectId, ref: 'Author'},
}, {timestamp: true});

var Author = mongoose.model('Author', AuthorSchema);
var Quote = mongoose.model('Quote', QuoteSchema);

// email:{
//     type: String,
//     required: [true, "Please enter a valid email address."],
//     validate: {
//         validator: function(value){
//             //return /\A[^@]+@([^@\.]+\.)+[^@\.]+\z/.test(value);
//             return /@/.test(value)
//         },
//         message: "Please enter a valid email address."
//     }
// },

// password:{
//     type: String,
//     required: [true, "Password must contain at least 1 number, Uppercase Letter, and special character."],
//     minlength: 8,
//     maxlength: 120,
//     validate: {
//         validator: function(value){
//             return /^([a-zA-Z0-9@*#]{4,24})/.test( value );
//         },
//         message: "Password must contain at least 1 number, Uppercase Letter, and special character."
//     }
// },