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

/* START_OF_SYMBOL_DEFINITION SecurityPolicyName */
/**
 * @summary SecurityPolicyName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityPolicyName  ::=  DirectoryString{ubObjectIdNameLength}
 * ```
 */
export type SecurityPolicyName = DirectoryString; // DefinedType
/* END_OF_SYMBOL_DEFINITION SecurityPolicyName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityPolicyName */
let _cached_decoder_for_SecurityPolicyName: $.ASN1Decoder<SecurityPolicyName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityPolicyName */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityPolicyName */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityPolicyName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityPolicyName} The decoded data structure.
 */
export function _decode_SecurityPolicyName(el: _Element) {
    if (!_cached_decoder_for_SecurityPolicyName) {
        _cached_decoder_for_SecurityPolicyName = _decode_DirectoryString;
    }
    return _cached_decoder_for_SecurityPolicyName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityPolicyName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityPolicyName */
let _cached_encoder_for_SecurityPolicyName: $.ASN1Encoder<SecurityPolicyName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityPolicyName */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityPolicyName */
/**
 * @summary Encodes a(n) SecurityPolicyName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityPolicyName, encoded as an ASN.1 Element.
 */
export function _encode_SecurityPolicyName(
    value: SecurityPolicyName,
    elGetter: $.ASN1Encoder<SecurityPolicyName>
) {
    if (!_cached_encoder_for_SecurityPolicyName) {
        _cached_encoder_for_SecurityPolicyName = _encode_DirectoryString;
    }
    return _cached_encoder_for_SecurityPolicyName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityPolicyName */

/* eslint-enable */
