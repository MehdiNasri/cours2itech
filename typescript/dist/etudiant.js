"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Etudiant = void 0;
var Etudiant = /** @class */ (function () {
    function Etudiant(nom, notes) {
        var _this = this;
        this.noteMoyenne = function () {
            var noteFinal = 0;
            for (var index = 0; index < _this.notes.length; index++) {
                noteFinal += _this.notes[index];
            }
            return noteFinal / _this.notes.length;
        };
        this.nom = nom;
        this.notes = notes;
    }
    return Etudiant;
}());
exports.Etudiant = Etudiant;
//# sourceMappingURL=etudiant.js.map