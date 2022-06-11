const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    imgUrl: { type: String, default: '' },
    createdDate: { type: Date, default: Date.now },
    aboutMe: { type: String, default: ''},
    email: { type: String, required: true },
    gender: { type: String, default: '' },
    location: { type: String, default: '' },
    provider: { type: String, default: 'self' },
    bookmarked: { type: String, default: '' },
    userdata: {
        type: Array,
        default: [
                { 
                    label: 'facebook',
                    name: '',
                    id: 1,
                    link: '',
                    visible: 'visible',
                    delete: 'system',
                    icon: "fab fa-facebook"
                }, 
                {
                    label: 'twitter',
                    name: '',
                    id: 2,
                    link: '',
                    visible: 'visible',
                    delete: 'system',
                    icon: "fab fa-twitter-square",
                },
                {
                    label: 'linkedin',
                    name: '',
                    id: 3,
                    link: '',
                    visible: 'visible',
                    delete: 'system',
                    icon: "fab fa-linkedin",
                },
                {
                    label: 'instagram',
                    name: '',
                    id: 4,
                    link: '',
                    visible: 'visible',
                    delete: 'system',
                    icon: "fab fa-instagram"
                },
                {
                    label: 'snapchat',
                    name: '',
                    id: 5,
                    link: '',
                    visible: 'visible',
                    delete: 'system',
                    icon: "fab fa-snapchat"
                },
                {
                    label: 'tiktok',
                    name: '',
                    id: 6,
                    link: '',
                    visible: 'visible',
                    delete: 'system',
                    icon: "fab fa-tiktok"
                },
                {
                    label: 'whatsapp',
                    name: '',
                    id: 7,
                    link: '',
                    visible: 'visible',
                    delete: 'system',
                    icon: "fab fa-whatsapp-square"
                },
                {
                    label: 'skype',
                    name: '',
                    id: 8,
                    link: '',
                    visible: 'visible',
                    delete: 'system',
                    icon: "fab fa-skype"
                },
                {
                    label: 'imo',
                    name: '',
                    id: 9,
                    link: '',
                    visible: 'visible',
                    delete: 'system',
                    icon: "fas fa-link"                    
                },
                {
                    label: 'youtube',
                    name: '',
                    id: 10,
                    link: '',
                    visible: 'visible',
                    delete: 'system',
                    icon: "fab fa-youtube"
                },
                {
                    label: 'pinterest',
                    name: '',
                    id: 11,
                    link: '',
                    visible: 'visible',
                    delete: 'system',
                    icon: "fab fa-pinterest"
                },
                {
                    label: "stackoverflow",
                    name: "",
                    id: 12,
                    link: "",
                    visible: "true",
                    delete: "system",
                    icon: "fab fa-stack-overflow",
                },
                {
                    label: "github",
                    name: "",
                    id: 13,
                    link: "",
                    visible: "true",
                    delete: "system",
                    icon: "fab fa-github",
                },
                
            ] 
    },
    bookmark: [
        {
            name: { type: String },
            username: { type: String },
        }
    ]
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);