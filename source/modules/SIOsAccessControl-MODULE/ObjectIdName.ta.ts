/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "x500-ts/dist/node/modules/SelectedAttributeTypes/DirectoryString.ta";
export {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "x500-ts/dist/node/modules/SelectedAttributeTypes/DirectoryString.ta";
export { ubObjectIdNameLength } from "../SIOsAccessControl-MODULE/ubObjectIdNameLength.va";

/* START_OF_SYMBOL_DEFINITION ObjectIdName */
/**
 * @summary ObjectIdName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectIdName  ::=  DirectoryString{ubObjectIdNameLength}
 * ```
 */
export type ObjectIdName = DirectoryString; // DefinedType
/* END_OF_SYMBOL_DEFINITION ObjectIdName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectIdName */
let _cached_decoder_for_ObjectIdName: $.ASN1Decoder<ObjectIdName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectIdName */

/* START_OF_SYMBOL_DEFINITION _decode_ObjectIdName */
/**
 * @summary Decodes an ASN.1 element into a(n) ObjectIdName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectIdName} The decoded data structure.
 */
export function _decode_ObjectIdName(el: _Element) {
    if (!_cached_decoder_for_ObjectIdName) {
        _cached_decoder_for_ObjectIdName = _decode_DirectoryString;
    }
    return _cached_decoder_for_ObjectIdName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ObjectIdName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectIdName */
let _cached_encoder_for_ObjectIdName: $.ASN1Encoder<ObjectIdName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectIdName */

/* START_OF_SYMBOL_DEFINITION _encode_ObjectIdName */
/**
 * @summary Encodes a(n) ObjectIdName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectIdName, encoded as an ASN.1 Element.
 */
export function _encode_ObjectIdName(
    value: ObjectIdName,
    elGetter: $.ASN1Encoder<ObjectIdName>
) {
    if (!_cached_encoder_for_ObjectIdName) {
        _cached_encoder_for_ObjectIdName = _encode_DirectoryString;
    }
    return _cached_encoder_for_ObjectIdName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ObjectIdName */

/* eslint-enable */
