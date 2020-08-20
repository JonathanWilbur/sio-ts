/*
    BEGIN_MODULE SIOsAccessControl-MODULE
    OID: joint-iso-itu-t.sios.specification.modules.accessControl
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "x500-ts/dist/node/AuthenticationFramework";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "x500-ts/dist/node/InformationFramework";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "x500-ts/dist/node/SelectedAttributeTypes";
import * as __utils from "./__utils";
import { joint_iso_itu_t } from "./__utils";

export const id_ConfidentialityLabel: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* sios */ 24,
        /* specification */ 0,
        /* securityLabels */ 1,
        /* confidentiality */ 0,
    ],
    joint_iso_itu_t
);

export type SecurityPolicyIdentifier = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_SecurityPolicyIdentifier: __utils.ASN1Decoder<
    SecurityPolicyIdentifier
> | null = null;
let _cached_encoder_for_SecurityPolicyIdentifier: __utils.ASN1Encoder<
    SecurityPolicyIdentifier
> | null = null;
export function _decode_SecurityPolicyIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SecurityPolicyIdentifier) {
        _cached_decoder_for_SecurityPolicyIdentifier =
            __utils._decodeObjectIdentifier;
    }
    return _cached_decoder_for_SecurityPolicyIdentifier(el);
}
export function _encode_SecurityPolicyIdentifier(
    value: SecurityPolicyIdentifier,
    elGetter: __utils.ASN1Encoder<SecurityPolicyIdentifier>
) {
    if (!_cached_encoder_for_SecurityPolicyIdentifier) {
        _cached_encoder_for_SecurityPolicyIdentifier =
            __utils._encodeObjectIdentifier;
    }
    return _cached_encoder_for_SecurityPolicyIdentifier(value, elGetter);
}

export type PrivacyMark =
    | { pString: asn1.PrintableString } /* CHOICE_ALT_ROOT */
    | { utf8String: asn1.UTF8String } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_PrivacyMark: __utils.ASN1Decoder<
    PrivacyMark
> | null = null;
let _cached_encoder_for_PrivacyMark: __utils.ASN1Encoder<
    PrivacyMark
> | null = null;
export function _decode_PrivacyMark(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PrivacyMark) {
        _cached_decoder_for_PrivacyMark = __utils._decode_inextensible_choice<
            PrivacyMark
        >({
            "UNIVERSAL 19": ["pString", __utils._decodePrintableString],
            "UNIVERSAL 12": ["utf8String", __utils._decodeUTF8String],
        });
    }
    return _cached_decoder_for_PrivacyMark(el);
}
export function _encode_PrivacyMark(
    value: PrivacyMark,
    elGetter: __utils.ASN1Encoder<PrivacyMark>
) {
    if (!_cached_encoder_for_PrivacyMark) {
        _cached_encoder_for_PrivacyMark = __utils._encode_choice<PrivacyMark>(
            {
                pString: __utils._encodePrintableString,
                utf8String: __utils._encodeUTF8String,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_PrivacyMark(value, elGetter);
}

export class SecurityCategory {
    constructor(
        readonly type_: asn1.OBJECT_IDENTIFIER,
        readonly value: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_SecurityCategory: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "value",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SecurityCategory: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SecurityCategory: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SecurityCategory: __utils.ASN1Decoder<
    SecurityCategory
> | null = null;
let _cached_encoder_for_SecurityCategory: __utils.ASN1Encoder<
    SecurityCategory
> | null = null;
export function _decode_SecurityCategory(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SecurityCategory) {
        _cached_decoder_for_SecurityCategory = function (
            el: asn1.ASN1Element
        ): SecurityCategory {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "SecurityCategory contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "type";
            sequence[1].name = "value";
            let type_!: asn1.OBJECT_IDENTIFIER;
            let value!: asn1.ASN1Element;
            type_ = __utils._decode_implicit<asn1.OBJECT_IDENTIFIER>(
                () => __utils._decodeObjectIdentifier
            )(sequence[0]);
            value = __utils._decode_explicit<asn1.ASN1Element>(
                () => __utils._decodeAny
            )(sequence[1]);
            // TODO: Validate values.
            return new SecurityCategory(type_, value);
        };
    }
    return _cached_decoder_for_SecurityCategory(el);
}
export function _encode_SecurityCategory(
    value: SecurityCategory,
    elGetter: __utils.ASN1Encoder<SecurityCategory>
) {
    if (!_cached_encoder_for_SecurityCategory) {
        _cached_encoder_for_SecurityCategory = function (
            value: SecurityCategory,
            elGetter: __utils.ASN1Encoder<SecurityCategory>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_implicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => __utils._encodeObjectIdentifier,
                            __utils.BER
                        )(value.type_, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            1,
                            () => __utils._encodeAny,
                            __utils.BER
                        )(value.value, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SecurityCategory(value, elGetter);
}

export type SecurityCategories = SecurityCategory[]; // SetOfType
let _cached_decoder_for_SecurityCategories: __utils.ASN1Decoder<
    SecurityCategories
> | null = null;
let _cached_encoder_for_SecurityCategories: __utils.ASN1Encoder<
    SecurityCategories
> | null = null;
export function _decode_SecurityCategories(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SecurityCategories) {
        _cached_decoder_for_SecurityCategories = __utils._decodeSetOf<
            SecurityCategory
        >(() => _decode_SecurityCategory);
    }
    return _cached_decoder_for_SecurityCategories(el);
}
export function _encode_SecurityCategories(
    value: SecurityCategories,
    elGetter: __utils.ASN1Encoder<SecurityCategories>
) {
    if (!_cached_encoder_for_SecurityCategories) {
        _cached_encoder_for_SecurityCategories = __utils._encodeSetOf<
            SecurityCategory
        >(() => _encode_SecurityCategory, __utils.BER);
    }
    return _cached_encoder_for_SecurityCategories(value, elGetter);
}

export class ConfidentialityLabel {
    constructor(
        readonly security_policy_identifier: asn1.OPTIONAL<
            SecurityPolicyIdentifier
        >,
        readonly security_classification: asn1.OPTIONAL<asn1.INTEGER>,
        readonly privacy_mark: asn1.OPTIONAL<PrivacyMark>,
        readonly security_categories: asn1.OPTIONAL<SecurityCategories>
    ) {}
}
export const _root_component_type_list_1_spec_for_ConfidentialityLabel: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "security-policy-identifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "security-classification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "privacy-mark",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "security-categories",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ConfidentialityLabel: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ConfidentialityLabel: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ConfidentialityLabel: __utils.ASN1Decoder<
    ConfidentialityLabel
> | null = null;
let _cached_encoder_for_ConfidentialityLabel: __utils.ASN1Encoder<
    ConfidentialityLabel
> | null = null;
export function _decode_ConfidentialityLabel(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ConfidentialityLabel) {
        _cached_decoder_for_ConfidentialityLabel = function (
            el: asn1.ASN1Element
        ): ConfidentialityLabel {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let security_policy_identifier: asn1.OPTIONAL<SecurityPolicyIdentifier>;
            let security_classification: asn1.OPTIONAL<asn1.INTEGER>;
            let privacy_mark: asn1.OPTIONAL<PrivacyMark>;
            let security_categories: asn1.OPTIONAL<SecurityCategories>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "security-policy-identifier": (_el: asn1.ASN1Element): void => {
                    security_policy_identifier = _decode_SecurityPolicyIdentifier(
                        _el
                    );
                },
                "security-classification": (_el: asn1.ASN1Element): void => {
                    security_classification = __utils._decodeInteger(_el);
                },
                "privacy-mark": (_el: asn1.ASN1Element): void => {
                    privacy_mark = _decode_PrivacyMark(_el);
                },
                "security-categories": (_el: asn1.ASN1Element): void => {
                    security_categories = _decode_SecurityCategories(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ConfidentialityLabel,
                _extension_additions_list_spec_for_ConfidentialityLabel,
                _root_component_type_list_2_spec_for_ConfidentialityLabel,
                undefined
            );
            return new ConfidentialityLabel /* SET_CONSTRUCTOR_CALL */(
                security_policy_identifier,
                security_classification,
                privacy_mark,
                security_categories
            );
        };
    }
    return _cached_decoder_for_ConfidentialityLabel(el);
}
export function _encode_ConfidentialityLabel(
    value: ConfidentialityLabel,
    elGetter: __utils.ASN1Encoder<ConfidentialityLabel>
) {
    if (!_cached_encoder_for_ConfidentialityLabel) {
        _cached_encoder_for_ConfidentialityLabel = function (
            value: ConfidentialityLabel,
            elGetter: __utils.ASN1Encoder<ConfidentialityLabel>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.security_policy_identifier ===
                        undefined
                            ? undefined
                            : _encode_SecurityPolicyIdentifier(
                                  value.security_policy_identifier,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.security_classification ===
                        undefined
                            ? undefined
                            : __utils._encodeInteger(
                                  value.security_classification,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.privacy_mark === undefined
                            ? undefined
                            : _encode_PrivacyMark(
                                  value.privacy_mark,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.security_categories === undefined
                            ? undefined
                            : _encode_SecurityCategories(
                                  value.security_categories,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ConfidentialityLabel(value, elGetter);
}

export const ub_privacy_mark_length: asn1.INTEGER = 128;

// TODO: ObjectClassAssignment: SECURITY-CATEGORY

// TODO: ObjectSetAssignment: SecurityCategoriesTable

// TODO: ObjectClassAssignment: ALGORITHM

export class AlgorithmIdentifier {
    constructor(
        readonly algorithm: asn1.OBJECT_IDENTIFIER,
        readonly parameters: asn1.OPTIONAL<asn1.ASN1Element>
    ) {}
}
export const _root_component_type_list_1_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "algorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "parameters",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AlgorithmIdentifier: __utils.ASN1Decoder<
    AlgorithmIdentifier
> | null = null;
let _cached_encoder_for_AlgorithmIdentifier: __utils.ASN1Encoder<
    AlgorithmIdentifier
> | null = null;
export function _decode_AlgorithmIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AlgorithmIdentifier) {
        _cached_decoder_for_AlgorithmIdentifier = function (
            el: asn1.ASN1Element
        ): AlgorithmIdentifier {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let algorithm!: asn1.OBJECT_IDENTIFIER;
            let parameters: asn1.OPTIONAL<asn1.ASN1Element>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                algorithm: (_el: asn1.ASN1Element): void => {
                    algorithm = __utils._decodeObjectIdentifier(_el);
                },
                parameters: (_el: asn1.ASN1Element): void => {
                    parameters = __utils._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AlgorithmIdentifier,
                _extension_additions_list_spec_for_AlgorithmIdentifier,
                _root_component_type_list_2_spec_for_AlgorithmIdentifier,
                undefined
            );
            return new AlgorithmIdentifier /* SEQUENCE_CONSTRUCTOR_CALL */(
                algorithm,
                parameters
            );
        };
    }
    return _cached_decoder_for_AlgorithmIdentifier(el);
}
export function _encode_AlgorithmIdentifier(
    value: AlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<AlgorithmIdentifier>
) {
    if (!_cached_encoder_for_AlgorithmIdentifier) {
        _cached_encoder_for_AlgorithmIdentifier = function (
            value: AlgorithmIdentifier,
            elGetter: __utils.ASN1Encoder<AlgorithmIdentifier>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.algorithm,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.parameters === undefined
                            ? undefined
                            : __utils._encodeAny(value.parameters, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_AlgorithmIdentifier(value, elGetter);
}

export class SIGNED<ToBeSigned> {
    constructor(
        readonly toBeSigned: ToBeSigned,
        readonly algorithm: AlgorithmIdentifier,
        readonly signature: asn1.BIT_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_SIGNED: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "toBeSigned",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "algorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signature",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SIGNED: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SIGNED: __utils.ComponentSpec[] = [];
export function _get_decoder_for_SIGNED<ToBeSigned>(
    _decode_ToBeSigned: __utils.ASN1Decoder<ToBeSigned>
) {
    return function (el: asn1.ASN1Element): SIGNED<ToBeSigned> {
        const sequence: asn1.ASN1Element[] = el.sequence;
        if (sequence.length < 3) {
            throw new asn1.ASN1ConstructionError(
                "SIGNED contained only " +
                    sequence.length.toString() +
                    " elements."
            );
        }
        // TODO: Validate tags.
        sequence[0].name = "toBeSigned";
        sequence[1].name = "algorithm";
        sequence[2].name = "signature";
        let toBeSigned!: ToBeSigned;
        let algorithm!: AlgorithmIdentifier;
        let signature!: asn1.BIT_STRING;
        toBeSigned = _decode_ToBeSigned(sequence[0]);
        algorithm = _decode_AlgorithmIdentifier(sequence[1]);
        signature = __utils._decodeBitString(sequence[2]);
        // TODO: Validate values.
        return new SIGNED<ToBeSigned>(toBeSigned, algorithm, signature);
    };
}
export function _get_encoder_for_SIGNED<ToBeSigned>(
    _encode_ToBeSigned: __utils.ASN1Encoder<ToBeSigned>
) {
    return function (
        value: SIGNED<ToBeSigned>,
        elGetter: __utils.ASN1Encoder<SIGNED<ToBeSigned>>
    ): asn1.ASN1Element {
        return __utils._encodeSequence(
            ([] as (asn1.ASN1Element | undefined)[])
                .concat([
                    /* REQUIRED   */ _encode_ToBeSigned(
                        value.toBeSigned,
                        __utils.BER
                    ),
                    /* REQUIRED   */ _encode_AlgorithmIdentifier(
                        value.algorithm,
                        __utils.BER
                    ),
                    /* REQUIRED   */ __utils._encodeBitString(
                        value.signature,
                        __utils.BER
                    ),
                ])
                .filter(
                    (c: asn1.ASN1Element | undefined): boolean => !!c
                ) as asn1.ASN1Element[],
            __utils.BER
        );
    };
}

export type EncodedSPIF = asn1.ASN1Element; // ObjectClassFieldType
let _cached_decoder_for_EncodedSPIF: __utils.ASN1Decoder<
    EncodedSPIF
> | null = null;
let _cached_encoder_for_EncodedSPIF: __utils.ASN1Encoder<
    EncodedSPIF
> | null = null;
export function _decode_EncodedSPIF(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncodedSPIF) {
        _cached_decoder_for_EncodedSPIF = __utils._decodeAny;
    }
    return _cached_decoder_for_EncodedSPIF(el);
}
export function _encode_EncodedSPIF(
    value: EncodedSPIF,
    elGetter: __utils.ASN1Encoder<EncodedSPIF>
) {
    if (!_cached_encoder_for_EncodedSPIF) {
        _cached_encoder_for_EncodedSPIF = __utils._encodeAny;
    }
    return _cached_encoder_for_EncodedSPIF(value, elGetter);
}

export type SecurityPolicyInformationFile = SIGNED<EncodedSPIF>; // DefinedType
let _cached_decoder_for_SecurityPolicyInformationFile: __utils.ASN1Decoder<
    SecurityPolicyInformationFile
> | null = null;
let _cached_encoder_for_SecurityPolicyInformationFile: __utils.ASN1Encoder<
    SecurityPolicyInformationFile
> | null = null;
export function _decode_SecurityPolicyInformationFile(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SecurityPolicyInformationFile) {
        _cached_decoder_for_SecurityPolicyInformationFile = _get_decoder_for_SIGNED<
            EncodedSPIF
        >(_decode_EncodedSPIF);
    }
    return _cached_decoder_for_SecurityPolicyInformationFile(el);
}
export function _encode_SecurityPolicyInformationFile(
    value: SecurityPolicyInformationFile,
    elGetter: __utils.ASN1Encoder<SecurityPolicyInformationFile>
) {
    if (!_cached_encoder_for_SecurityPolicyInformationFile) {
        _cached_encoder_for_SecurityPolicyInformationFile = _get_encoder_for_SIGNED<
            EncodedSPIF
        >(_encode_EncodedSPIF);
    }
    return _cached_encoder_for_SecurityPolicyInformationFile(value, elGetter);
}

export type VersionInformationData = asn1.INTEGER;
export const VersionInformationData_v1: VersionInformationData = 0; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_VersionInformationData: __utils.ASN1Decoder<
    VersionInformationData
> | null = null;
let _cached_encoder_for_VersionInformationData: __utils.ASN1Encoder<
    VersionInformationData
> | null = null;
export function _decode_VersionInformationData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_VersionInformationData) {
        _cached_decoder_for_VersionInformationData = __utils._decodeInteger;
    }
    return _cached_decoder_for_VersionInformationData(el);
}
export function _encode_VersionInformationData(
    value: VersionInformationData,
    elGetter: __utils.ASN1Encoder<VersionInformationData>
) {
    if (!_cached_encoder_for_VersionInformationData) {
        _cached_encoder_for_VersionInformationData = __utils._encodeInteger;
    }
    return _cached_encoder_for_VersionInformationData(value, elGetter);
}

export type SPIFVersionNumber = asn1.INTEGER;
let _cached_decoder_for_SPIFVersionNumber: __utils.ASN1Decoder<
    SPIFVersionNumber
> | null = null;
let _cached_encoder_for_SPIFVersionNumber: __utils.ASN1Encoder<
    SPIFVersionNumber
> | null = null;
export function _decode_SPIFVersionNumber(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SPIFVersionNumber) {
        _cached_decoder_for_SPIFVersionNumber = __utils._decodeInteger;
    }
    return _cached_decoder_for_SPIFVersionNumber(el);
}
export function _encode_SPIFVersionNumber(
    value: SPIFVersionNumber,
    elGetter: __utils.ASN1Encoder<SPIFVersionNumber>
) {
    if (!_cached_encoder_for_SPIFVersionNumber) {
        _cached_encoder_for_SPIFVersionNumber = __utils._encodeInteger;
    }
    return _cached_encoder_for_SPIFVersionNumber(value, elGetter);
}

export class UpdateInformationData {
    constructor(
        readonly sPIFVersionNumber: SPIFVersionNumber,
        readonly creationDate: asn1.GeneralizedTime,
        readonly originatorDistinguishedName: Name,
        readonly keyIdentifier: asn1.OPTIONAL<asn1.OCTET_STRING>
    ) {}
}
export const _root_component_type_list_1_spec_for_UpdateInformationData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "sPIFVersionNumber",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "creationDate",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "originatorDistinguishedName",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "keyIdentifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_UpdateInformationData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_UpdateInformationData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_UpdateInformationData: __utils.ASN1Decoder<
    UpdateInformationData
> | null = null;
let _cached_encoder_for_UpdateInformationData: __utils.ASN1Encoder<
    UpdateInformationData
> | null = null;
export function _decode_UpdateInformationData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UpdateInformationData) {
        _cached_decoder_for_UpdateInformationData = function (
            el: asn1.ASN1Element
        ): UpdateInformationData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let sPIFVersionNumber!: SPIFVersionNumber;
            let creationDate!: asn1.GeneralizedTime;
            let originatorDistinguishedName!: Name;
            let keyIdentifier: asn1.OPTIONAL<asn1.OCTET_STRING>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                sPIFVersionNumber: (_el: asn1.ASN1Element): void => {
                    sPIFVersionNumber = _decode_SPIFVersionNumber(_el);
                },
                creationDate: (_el: asn1.ASN1Element): void => {
                    creationDate = __utils._decodeGeneralizedTime(_el);
                },
                originatorDistinguishedName: (_el: asn1.ASN1Element): void => {
                    originatorDistinguishedName = _decode_Name(_el);
                },
                keyIdentifier: (_el: asn1.ASN1Element): void => {
                    keyIdentifier = __utils._decodeOctetString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UpdateInformationData,
                _extension_additions_list_spec_for_UpdateInformationData,
                _root_component_type_list_2_spec_for_UpdateInformationData,
                undefined
            );
            return new UpdateInformationData /* SEQUENCE_CONSTRUCTOR_CALL */(
                sPIFVersionNumber,
                creationDate,
                originatorDistinguishedName,
                keyIdentifier
            );
        };
    }
    return _cached_decoder_for_UpdateInformationData(el);
}
export function _encode_UpdateInformationData(
    value: UpdateInformationData,
    elGetter: __utils.ASN1Encoder<UpdateInformationData>
) {
    if (!_cached_encoder_for_UpdateInformationData) {
        _cached_encoder_for_UpdateInformationData = function (
            value: UpdateInformationData,
            elGetter: __utils.ASN1Encoder<UpdateInformationData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SPIFVersionNumber(
                            value.sPIFVersionNumber,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeGeneralizedTime(
                            value.creationDate,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Name(
                            value.originatorDistinguishedName,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.keyIdentifier === undefined
                            ? undefined
                            : __utils._encodeOctetString(
                                  value.keyIdentifier,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_UpdateInformationData(value, elGetter);
}

export const ubObjectIdNameLength: asn1.INTEGER = 256;

export type ObjectIdName = DirectoryString; // DefinedType
let _cached_decoder_for_ObjectIdName: __utils.ASN1Decoder<
    ObjectIdName
> | null = null;
let _cached_encoder_for_ObjectIdName: __utils.ASN1Encoder<
    ObjectIdName
> | null = null;
export function _decode_ObjectIdName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ObjectIdName) {
        _cached_decoder_for_ObjectIdName = _decode_DirectoryString;
    }
    return _cached_decoder_for_ObjectIdName(el);
}
export function _encode_ObjectIdName(
    value: ObjectIdName,
    elGetter: __utils.ASN1Encoder<ObjectIdName>
) {
    if (!_cached_encoder_for_ObjectIdName) {
        _cached_encoder_for_ObjectIdName = _encode_DirectoryString;
    }
    return _cached_encoder_for_ObjectIdName(value, elGetter);
}

export class ObjectIdData {
    constructor(
        readonly objectId: asn1.OBJECT_IDENTIFIER,
        readonly objectIdName: ObjectIdName
    ) {}
}
export const _root_component_type_list_1_spec_for_ObjectIdData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "objectId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "objectIdName",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ObjectIdData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ObjectIdData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ObjectIdData: __utils.ASN1Decoder<
    ObjectIdData
> | null = null;
let _cached_encoder_for_ObjectIdData: __utils.ASN1Encoder<
    ObjectIdData
> | null = null;
export function _decode_ObjectIdData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ObjectIdData) {
        _cached_decoder_for_ObjectIdData = function (
            el: asn1.ASN1Element
        ): ObjectIdData {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "ObjectIdData contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "objectId";
            sequence[1].name = "objectIdName";
            let objectId!: asn1.OBJECT_IDENTIFIER;
            let objectIdName!: ObjectIdName;
            objectId = __utils._decodeObjectIdentifier(sequence[0]);
            objectIdName = _decode_ObjectIdName(sequence[1]);
            // TODO: Validate values.
            return new ObjectIdData(objectId, objectIdName);
        };
    }
    return _cached_decoder_for_ObjectIdData(el);
}
export function _encode_ObjectIdData(
    value: ObjectIdData,
    elGetter: __utils.ASN1Encoder<ObjectIdData>
) {
    if (!_cached_encoder_for_ObjectIdData) {
        _cached_encoder_for_ObjectIdData = function (
            value: ObjectIdData,
            elGetter: __utils.ASN1Encoder<ObjectIdData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.objectId,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectIdName(
                            value.objectIdName,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ObjectIdData(value, elGetter);
}

export type LabelAndCertValue = asn1.INTEGER;
let _cached_decoder_for_LabelAndCertValue: __utils.ASN1Decoder<
    LabelAndCertValue
> | null = null;
let _cached_encoder_for_LabelAndCertValue: __utils.ASN1Encoder<
    LabelAndCertValue
> | null = null;
export function _decode_LabelAndCertValue(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_LabelAndCertValue) {
        _cached_decoder_for_LabelAndCertValue = __utils._decodeInteger;
    }
    return _cached_decoder_for_LabelAndCertValue(el);
}
export function _encode_LabelAndCertValue(
    value: LabelAndCertValue,
    elGetter: __utils.ASN1Encoder<LabelAndCertValue>
) {
    if (!_cached_encoder_for_LabelAndCertValue) {
        _cached_encoder_for_LabelAndCertValue = __utils._encodeInteger;
    }
    return _cached_encoder_for_LabelAndCertValue(value, elGetter);
}

export const ubClassificationNameLength: asn1.INTEGER = 256;

export type ClassificationName = DirectoryString; // DefinedType
let _cached_decoder_for_ClassificationName: __utils.ASN1Decoder<
    ClassificationName
> | null = null;
let _cached_encoder_for_ClassificationName: __utils.ASN1Encoder<
    ClassificationName
> | null = null;
export function _decode_ClassificationName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ClassificationName) {
        _cached_decoder_for_ClassificationName = _decode_DirectoryString;
    }
    return _cached_decoder_for_ClassificationName(el);
}
export function _encode_ClassificationName(
    value: ClassificationName,
    elGetter: __utils.ASN1Encoder<ClassificationName>
) {
    if (!_cached_encoder_for_ClassificationName) {
        _cached_encoder_for_ClassificationName = _encode_DirectoryString;
    }
    return _cached_encoder_for_ClassificationName(value, elGetter);
}

export type Applied = asn1.INTEGER;
export const Applied_encrypt: Applied = 0; /* LONG_NAMED_INTEGER_VALUE */
export const Applied_decrypt: Applied = 1; /* LONG_NAMED_INTEGER_VALUE */
export const Applied_both: Applied = 2; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Applied: __utils.ASN1Decoder<Applied> | null = null;
let _cached_encoder_for_Applied: __utils.ASN1Encoder<Applied> | null = null;
export function _decode_Applied(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Applied) {
        _cached_decoder_for_Applied = __utils._decodeInteger;
    }
    return _cached_decoder_for_Applied(el);
}
export function _encode_Applied(
    value: Applied,
    elGetter: __utils.ASN1Encoder<Applied>
) {
    if (!_cached_encoder_for_Applied) {
        _cached_encoder_for_Applied = __utils._encodeInteger;
    }
    return _cached_encoder_for_Applied(value, elGetter);
}

export class EquivalentClassification {
    constructor(
        readonly securityPolicyId: asn1.OBJECT_IDENTIFIER,
        readonly labelAndCertValue: LabelAndCertValue,
        readonly applied: Applied
    ) {}
}
export const _root_component_type_list_1_spec_for_EquivalentClassification: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityPolicyId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "labelAndCertValue",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "applied",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EquivalentClassification: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EquivalentClassification: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EquivalentClassification: __utils.ASN1Decoder<
    EquivalentClassification
> | null = null;
let _cached_encoder_for_EquivalentClassification: __utils.ASN1Encoder<
    EquivalentClassification
> | null = null;
export function _decode_EquivalentClassification(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EquivalentClassification) {
        _cached_decoder_for_EquivalentClassification = function (
            el: asn1.ASN1Element
        ): EquivalentClassification {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new asn1.ASN1ConstructionError(
                    "EquivalentClassification contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "securityPolicyId";
            sequence[1].name = "labelAndCertValue";
            sequence[2].name = "applied";
            let securityPolicyId!: asn1.OBJECT_IDENTIFIER;
            let labelAndCertValue!: LabelAndCertValue;
            let applied!: Applied;
            securityPolicyId = __utils._decodeObjectIdentifier(sequence[0]);
            labelAndCertValue = _decode_LabelAndCertValue(sequence[1]);
            applied = _decode_Applied(sequence[2]);
            // TODO: Validate values.
            return new EquivalentClassification(
                securityPolicyId,
                labelAndCertValue,
                applied
            );
        };
    }
    return _cached_decoder_for_EquivalentClassification(el);
}
export function _encode_EquivalentClassification(
    value: EquivalentClassification,
    elGetter: __utils.ASN1Encoder<EquivalentClassification>
) {
    if (!_cached_encoder_for_EquivalentClassification) {
        _cached_encoder_for_EquivalentClassification = function (
            value: EquivalentClassification,
            elGetter: __utils.ASN1Encoder<EquivalentClassification>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.securityPolicyId,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_LabelAndCertValue(
                            value.labelAndCertValue,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Applied(
                            value.applied,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_EquivalentClassification(value, elGetter);
}

export type EquivalentClassifications = EquivalentClassification[]; // SequenceOfType
let _cached_decoder_for_EquivalentClassifications: __utils.ASN1Decoder<
    EquivalentClassifications
> | null = null;
let _cached_encoder_for_EquivalentClassifications: __utils.ASN1Encoder<
    EquivalentClassifications
> | null = null;
export function _decode_EquivalentClassifications(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EquivalentClassifications) {
        _cached_decoder_for_EquivalentClassifications = __utils._decodeSequenceOf<
            EquivalentClassification
        >(() => _decode_EquivalentClassification);
    }
    return _cached_decoder_for_EquivalentClassifications(el);
}
export function _encode_EquivalentClassifications(
    value: EquivalentClassifications,
    elGetter: __utils.ASN1Encoder<EquivalentClassifications>
) {
    if (!_cached_encoder_for_EquivalentClassifications) {
        _cached_encoder_for_EquivalentClassifications = __utils._encodeSequenceOf<
            EquivalentClassification
        >(() => _encode_EquivalentClassification, __utils.BER);
    }
    return _cached_encoder_for_EquivalentClassifications(value, elGetter);
}

export const ubMarkingPhraseLength: asn1.INTEGER = 256;

export type MarkingPhrase = DirectoryString; // DefinedType
let _cached_decoder_for_MarkingPhrase: __utils.ASN1Decoder<
    MarkingPhrase
> | null = null;
let _cached_encoder_for_MarkingPhrase: __utils.ASN1Encoder<
    MarkingPhrase
> | null = null;
export function _decode_MarkingPhrase(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MarkingPhrase) {
        _cached_decoder_for_MarkingPhrase = _decode_DirectoryString;
    }
    return _cached_decoder_for_MarkingPhrase(el);
}
export function _encode_MarkingPhrase(
    value: MarkingPhrase,
    elGetter: __utils.ASN1Encoder<MarkingPhrase>
) {
    if (!_cached_encoder_for_MarkingPhrase) {
        _cached_encoder_for_MarkingPhrase = _encode_DirectoryString;
    }
    return _cached_encoder_for_MarkingPhrase(value, elGetter);
}

export type MarkingCode = asn1.INTEGER;
export const MarkingCode_pageTop: MarkingCode = 1; /* LONG_NAMED_INTEGER_VALUE */
export const MarkingCode_pageBottom: MarkingCode = 2; /* LONG_NAMED_INTEGER_VALUE */
export const MarkingCode_pageTopBottom: MarkingCode = 3; /* LONG_NAMED_INTEGER_VALUE */
export const MarkingCode_documentEnd: MarkingCode = 4; /* LONG_NAMED_INTEGER_VALUE */
export const MarkingCode_noNameDisplay: MarkingCode = 5; /* LONG_NAMED_INTEGER_VALUE */
export const MarkingCode_noMarkingDisplay: MarkingCode = 6; /* LONG_NAMED_INTEGER_VALUE */
export const MarkingCode_unused: MarkingCode = 7; /* LONG_NAMED_INTEGER_VALUE */
export const MarkingCode_documentStart: MarkingCode = 8; /* LONG_NAMED_INTEGER_VALUE */
export const MarkingCode_suppressClassName: MarkingCode = 9; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_MarkingCode: __utils.ASN1Decoder<
    MarkingCode
> | null = null;
let _cached_encoder_for_MarkingCode: __utils.ASN1Encoder<
    MarkingCode
> | null = null;
export function _decode_MarkingCode(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MarkingCode) {
        _cached_decoder_for_MarkingCode = __utils._decodeInteger;
    }
    return _cached_decoder_for_MarkingCode(el);
}
export function _encode_MarkingCode(
    value: MarkingCode,
    elGetter: __utils.ASN1Encoder<MarkingCode>
) {
    if (!_cached_encoder_for_MarkingCode) {
        _cached_encoder_for_MarkingCode = __utils._encodeInteger;
    }
    return _cached_encoder_for_MarkingCode(value, elGetter);
}

export type MarkingCodes = MarkingCode[]; // SequenceOfType
let _cached_decoder_for_MarkingCodes: __utils.ASN1Decoder<
    MarkingCodes
> | null = null;
let _cached_encoder_for_MarkingCodes: __utils.ASN1Encoder<
    MarkingCodes
> | null = null;
export function _decode_MarkingCodes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MarkingCodes) {
        _cached_decoder_for_MarkingCodes = __utils._decodeSequenceOf<
            MarkingCode
        >(() => _decode_MarkingCode);
    }
    return _cached_decoder_for_MarkingCodes(el);
}
export function _encode_MarkingCodes(
    value: MarkingCodes,
    elGetter: __utils.ASN1Encoder<MarkingCodes>
) {
    if (!_cached_encoder_for_MarkingCodes) {
        _cached_encoder_for_MarkingCodes = __utils._encodeSequenceOf<
            MarkingCode
        >(() => _encode_MarkingCode, __utils.BER);
    }
    return _cached_encoder_for_MarkingCodes(value, elGetter);
}

export class MarkingData {
    constructor(
        readonly markingPhrase: asn1.OPTIONAL<MarkingPhrase>,
        readonly markingCodes: asn1.OPTIONAL<MarkingCodes>
    ) {}
}
export const _root_component_type_list_1_spec_for_MarkingData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "markingPhrase",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "markingCodes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_MarkingData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_MarkingData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_MarkingData: __utils.ASN1Decoder<
    MarkingData
> | null = null;
let _cached_encoder_for_MarkingData: __utils.ASN1Encoder<
    MarkingData
> | null = null;
export function _decode_MarkingData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MarkingData) {
        _cached_decoder_for_MarkingData = function (
            el: asn1.ASN1Element
        ): MarkingData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let markingPhrase: asn1.OPTIONAL<MarkingPhrase>;
            let markingCodes: asn1.OPTIONAL<MarkingCodes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                markingPhrase: (_el: asn1.ASN1Element): void => {
                    markingPhrase = _decode_MarkingPhrase(_el);
                },
                markingCodes: (_el: asn1.ASN1Element): void => {
                    markingCodes = _decode_MarkingCodes(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MarkingData,
                _extension_additions_list_spec_for_MarkingData,
                _root_component_type_list_2_spec_for_MarkingData,
                undefined
            );
            return new MarkingData /* SEQUENCE_CONSTRUCTOR_CALL */(
                markingPhrase,
                markingCodes
            );
        };
    }
    return _cached_decoder_for_MarkingData(el);
}
export function _encode_MarkingData(
    value: MarkingData,
    elGetter: __utils.ASN1Encoder<MarkingData>
) {
    if (!_cached_encoder_for_MarkingData) {
        _cached_encoder_for_MarkingData = function (
            value: MarkingData,
            elGetter: __utils.ASN1Encoder<MarkingData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.markingPhrase === undefined
                            ? undefined
                            : _encode_MarkingPhrase(
                                  value.markingPhrase,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.markingCodes === undefined
                            ? undefined
                            : _encode_MarkingCodes(
                                  value.markingCodes,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_MarkingData(value, elGetter);
}

export type MarkingDataInfo = MarkingData[]; // SequenceOfType
let _cached_decoder_for_MarkingDataInfo: __utils.ASN1Decoder<
    MarkingDataInfo
> | null = null;
let _cached_encoder_for_MarkingDataInfo: __utils.ASN1Encoder<
    MarkingDataInfo
> | null = null;
export function _decode_MarkingDataInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MarkingDataInfo) {
        _cached_decoder_for_MarkingDataInfo = __utils._decodeSequenceOf<
            MarkingData
        >(() => _decode_MarkingData);
    }
    return _cached_decoder_for_MarkingDataInfo(el);
}
export function _encode_MarkingDataInfo(
    value: MarkingDataInfo,
    elGetter: __utils.ASN1Encoder<MarkingDataInfo>
) {
    if (!_cached_encoder_for_MarkingDataInfo) {
        _cached_encoder_for_MarkingDataInfo = __utils._encodeSequenceOf<
            MarkingData
        >(() => _encode_MarkingData, __utils.BER);
    }
    return _cached_encoder_for_MarkingDataInfo(value, elGetter);
}

export type Operation = asn1.INTEGER;
export const Operation_onlyOne: Operation = 1; /* LONG_NAMED_INTEGER_VALUE */
export const Operation_oneOrMore: Operation = 2; /* LONG_NAMED_INTEGER_VALUE */
export const Operation_all: Operation = 3; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Operation: __utils.ASN1Decoder<Operation> | null = null;
let _cached_encoder_for_Operation: __utils.ASN1Encoder<Operation> | null = null;
export function _decode_Operation(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Operation) {
        _cached_decoder_for_Operation = __utils._decodeInteger;
    }
    return _cached_decoder_for_Operation(el);
}
export function _encode_Operation(
    value: Operation,
    elGetter: __utils.ASN1Encoder<Operation>
) {
    if (!_cached_encoder_for_Operation) {
        _cached_encoder_for_Operation = __utils._encodeInteger;
    }
    return _cached_encoder_for_Operation(value, elGetter);
}

export class OptionalCategoryData {
    constructor(
        readonly optCatDataId: asn1.OBJECT_IDENTIFIER,
        readonly categorydata: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_OptionalCategoryData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "optCatDataId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "categorydata",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OptionalCategoryData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OptionalCategoryData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OptionalCategoryData: __utils.ASN1Decoder<
    OptionalCategoryData
> | null = null;
let _cached_encoder_for_OptionalCategoryData: __utils.ASN1Encoder<
    OptionalCategoryData
> | null = null;
export function _decode_OptionalCategoryData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OptionalCategoryData) {
        _cached_decoder_for_OptionalCategoryData = function (
            el: asn1.ASN1Element
        ): OptionalCategoryData {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "OptionalCategoryData contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "optCatDataId";
            sequence[1].name = "categorydata";
            let optCatDataId!: asn1.OBJECT_IDENTIFIER;
            let categorydata!: asn1.ASN1Element;
            optCatDataId = __utils._decodeObjectIdentifier(sequence[0]);
            categorydata = __utils._decodeAny(sequence[1]);
            // TODO: Validate values.
            return new OptionalCategoryData(optCatDataId, categorydata);
        };
    }
    return _cached_decoder_for_OptionalCategoryData(el);
}
export function _encode_OptionalCategoryData(
    value: OptionalCategoryData,
    elGetter: __utils.ASN1Encoder<OptionalCategoryData>
) {
    if (!_cached_encoder_for_OptionalCategoryData) {
        _cached_encoder_for_OptionalCategoryData = function (
            value: OptionalCategoryData,
            elGetter: __utils.ASN1Encoder<OptionalCategoryData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.optCatDataId,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeAny(
                            value.categorydata,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_OptionalCategoryData(value, elGetter);
}

export type CategoryGroup = OptionalCategoryData[]; // SequenceOfType
let _cached_decoder_for_CategoryGroup: __utils.ASN1Decoder<
    CategoryGroup
> | null = null;
let _cached_encoder_for_CategoryGroup: __utils.ASN1Encoder<
    CategoryGroup
> | null = null;
export function _decode_CategoryGroup(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CategoryGroup) {
        _cached_decoder_for_CategoryGroup = __utils._decodeSequenceOf<
            OptionalCategoryData
        >(() => _decode_OptionalCategoryData);
    }
    return _cached_decoder_for_CategoryGroup(el);
}
export function _encode_CategoryGroup(
    value: CategoryGroup,
    elGetter: __utils.ASN1Encoder<CategoryGroup>
) {
    if (!_cached_encoder_for_CategoryGroup) {
        _cached_encoder_for_CategoryGroup = __utils._encodeSequenceOf<
            OptionalCategoryData
        >(() => _encode_OptionalCategoryData, __utils.BER);
    }
    return _cached_encoder_for_CategoryGroup(value, elGetter);
}

export class OptionalCategoryGroup {
    constructor(
        readonly operation: Operation,
        readonly categoryGroup: CategoryGroup
    ) {}
}
export const _root_component_type_list_1_spec_for_OptionalCategoryGroup: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "operation",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "categoryGroup",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OptionalCategoryGroup: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OptionalCategoryGroup: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OptionalCategoryGroup: __utils.ASN1Decoder<
    OptionalCategoryGroup
> | null = null;
let _cached_encoder_for_OptionalCategoryGroup: __utils.ASN1Encoder<
    OptionalCategoryGroup
> | null = null;
export function _decode_OptionalCategoryGroup(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OptionalCategoryGroup) {
        _cached_decoder_for_OptionalCategoryGroup = function (
            el: asn1.ASN1Element
        ): OptionalCategoryGroup {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "OptionalCategoryGroup contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "operation";
            sequence[1].name = "categoryGroup";
            let operation!: Operation;
            let categoryGroup!: CategoryGroup;
            operation = _decode_Operation(sequence[0]);
            categoryGroup = _decode_CategoryGroup(sequence[1]);
            // TODO: Validate values.
            return new OptionalCategoryGroup(operation, categoryGroup);
        };
    }
    return _cached_decoder_for_OptionalCategoryGroup(el);
}
export function _encode_OptionalCategoryGroup(
    value: OptionalCategoryGroup,
    elGetter: __utils.ASN1Encoder<OptionalCategoryGroup>
) {
    if (!_cached_encoder_for_OptionalCategoryGroup) {
        _cached_encoder_for_OptionalCategoryGroup = function (
            value: OptionalCategoryGroup,
            elGetter: __utils.ASN1Encoder<OptionalCategoryGroup>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Operation(
                            value.operation,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_CategoryGroup(
                            value.categoryGroup,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_OptionalCategoryGroup(value, elGetter);
}

export type OptionalCategoryGroups = OptionalCategoryGroup[]; // SequenceOfType
let _cached_decoder_for_OptionalCategoryGroups: __utils.ASN1Decoder<
    OptionalCategoryGroups
> | null = null;
let _cached_encoder_for_OptionalCategoryGroups: __utils.ASN1Encoder<
    OptionalCategoryGroups
> | null = null;
export function _decode_OptionalCategoryGroups(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OptionalCategoryGroups) {
        _cached_decoder_for_OptionalCategoryGroups = __utils._decodeSequenceOf<
            OptionalCategoryGroup
        >(() => _decode_OptionalCategoryGroup);
    }
    return _cached_decoder_for_OptionalCategoryGroups(el);
}
export function _encode_OptionalCategoryGroups(
    value: OptionalCategoryGroups,
    elGetter: __utils.ASN1Encoder<OptionalCategoryGroups>
) {
    if (!_cached_encoder_for_OptionalCategoryGroups) {
        _cached_encoder_for_OptionalCategoryGroups = __utils._encodeSequenceOf<
            OptionalCategoryGroup
        >(() => _encode_OptionalCategoryGroup, __utils.BER);
    }
    return _cached_encoder_for_OptionalCategoryGroups(value, elGetter);
}

export class SecurityClassification {
    constructor(
        readonly labelAndCertValue: LabelAndCertValue,
        readonly classificationName: ClassificationName,
        readonly equivalentClassifications: asn1.OPTIONAL<
            EquivalentClassifications
        >,
        readonly hierarchyValue: asn1.INTEGER,
        readonly markingData: asn1.OPTIONAL<MarkingDataInfo>,
        readonly requiredCategory: asn1.OPTIONAL<OptionalCategoryGroups>,
        readonly obsolete: asn1.OPTIONAL<asn1.BOOLEAN>
    ) {}
    public static get _default_value_for_obsolete() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_SecurityClassification: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "labelAndCertValue",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "classificationName",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "equivalentClassifications",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "hierarchyValue",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "markingData",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "requiredCategory",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "obsolete",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SecurityClassification: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SecurityClassification: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SecurityClassification: __utils.ASN1Decoder<
    SecurityClassification
> | null = null;
let _cached_encoder_for_SecurityClassification: __utils.ASN1Encoder<
    SecurityClassification
> | null = null;
export function _decode_SecurityClassification(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SecurityClassification) {
        _cached_decoder_for_SecurityClassification = function (
            el: asn1.ASN1Element
        ): SecurityClassification {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let labelAndCertValue!: LabelAndCertValue;
            let classificationName!: ClassificationName;
            let equivalentClassifications: asn1.OPTIONAL<EquivalentClassifications>;
            let hierarchyValue!: asn1.INTEGER;
            let markingData: asn1.OPTIONAL<MarkingDataInfo>;
            let requiredCategory: asn1.OPTIONAL<OptionalCategoryGroups>;
            let obsolete: asn1.OPTIONAL<asn1.BOOLEAN> =
                SecurityClassification._default_value_for_obsolete;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                labelAndCertValue: (_el: asn1.ASN1Element): void => {
                    labelAndCertValue = _decode_LabelAndCertValue(_el);
                },
                classificationName: (_el: asn1.ASN1Element): void => {
                    classificationName = _decode_ClassificationName(_el);
                },
                equivalentClassifications: (_el: asn1.ASN1Element): void => {
                    equivalentClassifications = __utils._decode_implicit<
                        EquivalentClassifications
                    >(() => _decode_EquivalentClassifications)(_el);
                },
                hierarchyValue: (_el: asn1.ASN1Element): void => {
                    hierarchyValue = __utils._decodeInteger(_el);
                },
                markingData: (_el: asn1.ASN1Element): void => {
                    markingData = __utils._decode_implicit<MarkingDataInfo>(
                        () => _decode_MarkingDataInfo
                    )(_el);
                },
                requiredCategory: (_el: asn1.ASN1Element): void => {
                    requiredCategory = __utils._decode_implicit<
                        OptionalCategoryGroups
                    >(() => _decode_OptionalCategoryGroups)(_el);
                },
                obsolete: (_el: asn1.ASN1Element): void => {
                    obsolete = __utils._decodeBoolean(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SecurityClassification,
                _extension_additions_list_spec_for_SecurityClassification,
                _root_component_type_list_2_spec_for_SecurityClassification,
                undefined
            );
            return new SecurityClassification /* SEQUENCE_CONSTRUCTOR_CALL */(
                labelAndCertValue,
                classificationName,
                equivalentClassifications,
                hierarchyValue,
                markingData,
                requiredCategory,
                obsolete
            );
        };
    }
    return _cached_decoder_for_SecurityClassification(el);
}
export function _encode_SecurityClassification(
    value: SecurityClassification,
    elGetter: __utils.ASN1Encoder<SecurityClassification>
) {
    if (!_cached_encoder_for_SecurityClassification) {
        _cached_encoder_for_SecurityClassification = function (
            value: SecurityClassification,
            elGetter: __utils.ASN1Encoder<SecurityClassification>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_LabelAndCertValue(
                            value.labelAndCertValue,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_ClassificationName(
                            value.classificationName,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.equivalentClassifications ===
                        undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_EquivalentClassifications,
                                  __utils.BER
                              )(value.equivalentClassifications, __utils.BER),
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.hierarchyValue,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.markingData === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_MarkingDataInfo,
                                  __utils.BER
                              )(value.markingData, __utils.BER),
                        /* IF_ABSENT  */ value.requiredCategory === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => _encode_OptionalCategoryGroups,
                                  __utils.BER
                              )(value.requiredCategory, __utils.BER),
                        /* IF_DEFAULT */ value.obsolete === undefined ||
                        __utils.deepEq(
                            value.obsolete,
                            SecurityClassification._default_value_for_obsolete
                        )
                            ? undefined
                            : __utils._encodeBoolean(
                                  value.obsolete,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SecurityClassification(value, elGetter);
}

export type SecurityClassifications = SecurityClassification[]; // SequenceOfType
let _cached_decoder_for_SecurityClassifications: __utils.ASN1Decoder<
    SecurityClassifications
> | null = null;
let _cached_encoder_for_SecurityClassifications: __utils.ASN1Encoder<
    SecurityClassifications
> | null = null;
export function _decode_SecurityClassifications(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SecurityClassifications) {
        _cached_decoder_for_SecurityClassifications = __utils._decodeSequenceOf<
            SecurityClassification
        >(() => _decode_SecurityClassification);
    }
    return _cached_decoder_for_SecurityClassifications(el);
}
export function _encode_SecurityClassifications(
    value: SecurityClassifications,
    elGetter: __utils.ASN1Encoder<SecurityClassifications>
) {
    if (!_cached_encoder_for_SecurityClassifications) {
        _cached_encoder_for_SecurityClassifications = __utils._encodeSequenceOf<
            SecurityClassification
        >(() => _encode_SecurityClassification, __utils.BER);
    }
    return _cached_encoder_for_SecurityClassifications(value, elGetter);
}

export type SPIF_SecurityCategories = SecurityCategory[]; // SequenceOfType
let _cached_decoder_for_SPIF_SecurityCategories: __utils.ASN1Decoder<
    SPIF_SecurityCategories
> | null = null;
let _cached_encoder_for_SPIF_SecurityCategories: __utils.ASN1Encoder<
    SPIF_SecurityCategories
> | null = null;
export function _decode_SPIF_SecurityCategories(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SPIF_SecurityCategories) {
        _cached_decoder_for_SPIF_SecurityCategories = __utils._decodeSequenceOf<
            SecurityCategory
        >(() => _decode_SecurityCategory);
    }
    return _cached_decoder_for_SPIF_SecurityCategories(el);
}
export function _encode_SPIF_SecurityCategories(
    value: SPIF_SecurityCategories,
    elGetter: __utils.ASN1Encoder<SPIF_SecurityCategories>
) {
    if (!_cached_encoder_for_SPIF_SecurityCategories) {
        _cached_encoder_for_SPIF_SecurityCategories = __utils._encodeSequenceOf<
            SecurityCategory
        >(() => _encode_SecurityCategory, __utils.BER);
    }
    return _cached_encoder_for_SPIF_SecurityCategories(value, elGetter);
}

export type SecurityPolicyName = DirectoryString; // DefinedType
let _cached_decoder_for_SecurityPolicyName: __utils.ASN1Decoder<
    SecurityPolicyName
> | null = null;
let _cached_encoder_for_SecurityPolicyName: __utils.ASN1Encoder<
    SecurityPolicyName
> | null = null;
export function _decode_SecurityPolicyName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SecurityPolicyName) {
        _cached_decoder_for_SecurityPolicyName = _decode_DirectoryString;
    }
    return _cached_decoder_for_SecurityPolicyName(el);
}
export function _encode_SecurityPolicyName(
    value: SecurityPolicyName,
    elGetter: __utils.ASN1Encoder<SecurityPolicyName>
) {
    if (!_cached_encoder_for_SecurityPolicyName) {
        _cached_encoder_for_SecurityPolicyName = _encode_DirectoryString;
    }
    return _cached_encoder_for_SecurityPolicyName(value, elGetter);
}

export class EquivalentPolicy {
    constructor(
        readonly securityPolicyId: asn1.OBJECT_IDENTIFIER,
        readonly securityPolicyName: asn1.OPTIONAL<SecurityPolicyName>
    ) {}
}
export const _root_component_type_list_1_spec_for_EquivalentPolicy: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityPolicyId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityPolicyName",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EquivalentPolicy: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EquivalentPolicy: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EquivalentPolicy: __utils.ASN1Decoder<
    EquivalentPolicy
> | null = null;
let _cached_encoder_for_EquivalentPolicy: __utils.ASN1Encoder<
    EquivalentPolicy
> | null = null;
export function _decode_EquivalentPolicy(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EquivalentPolicy) {
        _cached_decoder_for_EquivalentPolicy = function (
            el: asn1.ASN1Element
        ): EquivalentPolicy {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let securityPolicyId!: asn1.OBJECT_IDENTIFIER;
            let securityPolicyName: asn1.OPTIONAL<SecurityPolicyName>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                securityPolicyId: (_el: asn1.ASN1Element): void => {
                    securityPolicyId = __utils._decodeObjectIdentifier(_el);
                },
                securityPolicyName: (_el: asn1.ASN1Element): void => {
                    securityPolicyName = _decode_SecurityPolicyName(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EquivalentPolicy,
                _extension_additions_list_spec_for_EquivalentPolicy,
                _root_component_type_list_2_spec_for_EquivalentPolicy,
                undefined
            );
            return new EquivalentPolicy /* SEQUENCE_CONSTRUCTOR_CALL */(
                securityPolicyId,
                securityPolicyName
            );
        };
    }
    return _cached_decoder_for_EquivalentPolicy(el);
}
export function _encode_EquivalentPolicy(
    value: EquivalentPolicy,
    elGetter: __utils.ASN1Encoder<EquivalentPolicy>
) {
    if (!_cached_encoder_for_EquivalentPolicy) {
        _cached_encoder_for_EquivalentPolicy = function (
            value: EquivalentPolicy,
            elGetter: __utils.ASN1Encoder<EquivalentPolicy>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.securityPolicyId,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.securityPolicyName === undefined
                            ? undefined
                            : _encode_SecurityPolicyName(
                                  value.securityPolicyName,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_EquivalentPolicy(value, elGetter);
}

export type EquivalentPolicies = EquivalentPolicy[]; // SequenceOfType
let _cached_decoder_for_EquivalentPolicies: __utils.ASN1Decoder<
    EquivalentPolicies
> | null = null;
let _cached_encoder_for_EquivalentPolicies: __utils.ASN1Encoder<
    EquivalentPolicies
> | null = null;
export function _decode_EquivalentPolicies(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EquivalentPolicies) {
        _cached_decoder_for_EquivalentPolicies = __utils._decodeSequenceOf<
            EquivalentPolicy
        >(() => _decode_EquivalentPolicy);
    }
    return _cached_decoder_for_EquivalentPolicies(el);
}
export function _encode_EquivalentPolicies(
    value: EquivalentPolicies,
    elGetter: __utils.ASN1Encoder<EquivalentPolicies>
) {
    if (!_cached_encoder_for_EquivalentPolicies) {
        _cached_encoder_for_EquivalentPolicies = __utils._encodeSequenceOf<
            EquivalentPolicy
        >(() => _encode_EquivalentPolicy, __utils.BER);
    }
    return _cached_encoder_for_EquivalentPolicies(value, elGetter);
}

export class SPIF {
    constructor(
        readonly versionInformation: asn1.OPTIONAL<VersionInformationData>,
        readonly updateInformation: UpdateInformationData,
        readonly securityPolicyIdData: ObjectIdData,
        readonly privilegeId: asn1.OBJECT_IDENTIFIER,
        readonly rbacId: asn1.OBJECT_IDENTIFIER,
        readonly securityClassifications: asn1.OPTIONAL<
            SecurityClassifications
        >,
        readonly securityCategories: asn1.OPTIONAL<SPIF_SecurityCategories>,
        readonly equivalentPolicies: asn1.OPTIONAL<EquivalentPolicies>,
        readonly defaultSecurityPolicyIdData: asn1.OPTIONAL<ObjectIdData>,
        readonly extensions: asn1.OPTIONAL<Extensions>
    ) {}
    public static get _default_value_for_versionInformation() {
        return VersionInformationData_v1;
    }
}
export const _root_component_type_list_1_spec_for_SPIF: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "versionInformation",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "updateInformation",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityPolicyIdData",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "privilegeId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "rbacId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityClassifications",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityCategories",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "equivalentPolicies",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "defaultSecurityPolicyIdData",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "extensions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SPIF: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SPIF: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SPIF: __utils.ASN1Decoder<SPIF> | null = null;
let _cached_encoder_for_SPIF: __utils.ASN1Encoder<SPIF> | null = null;
export function _decode_SPIF(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SPIF) {
        _cached_decoder_for_SPIF = function (el: asn1.ASN1Element): SPIF {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let versionInformation: asn1.OPTIONAL<VersionInformationData> =
                SPIF._default_value_for_versionInformation;
            let updateInformation!: UpdateInformationData;
            let securityPolicyIdData!: ObjectIdData;
            let privilegeId!: asn1.OBJECT_IDENTIFIER;
            let rbacId!: asn1.OBJECT_IDENTIFIER;
            let securityClassifications: asn1.OPTIONAL<SecurityClassifications>;
            let securityCategories: asn1.OPTIONAL<SPIF_SecurityCategories>;
            let equivalentPolicies: asn1.OPTIONAL<EquivalentPolicies>;
            let defaultSecurityPolicyIdData: asn1.OPTIONAL<ObjectIdData>;
            let extensions: asn1.OPTIONAL<Extensions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                versionInformation: (_el: asn1.ASN1Element): void => {
                    versionInformation = _decode_VersionInformationData(_el);
                },
                updateInformation: (_el: asn1.ASN1Element): void => {
                    updateInformation = _decode_UpdateInformationData(_el);
                },
                securityPolicyIdData: (_el: asn1.ASN1Element): void => {
                    securityPolicyIdData = _decode_ObjectIdData(_el);
                },
                privilegeId: (_el: asn1.ASN1Element): void => {
                    privilegeId = __utils._decodeObjectIdentifier(_el);
                },
                rbacId: (_el: asn1.ASN1Element): void => {
                    rbacId = __utils._decodeObjectIdentifier(_el);
                },
                securityClassifications: (_el: asn1.ASN1Element): void => {
                    securityClassifications = __utils._decode_implicit<
                        SecurityClassifications
                    >(() => _decode_SecurityClassifications)(_el);
                },
                securityCategories: (_el: asn1.ASN1Element): void => {
                    securityCategories = __utils._decode_implicit<
                        SPIF_SecurityCategories
                    >(() => _decode_SPIF_SecurityCategories)(_el);
                },
                equivalentPolicies: (_el: asn1.ASN1Element): void => {
                    equivalentPolicies = __utils._decode_implicit<
                        EquivalentPolicies
                    >(() => _decode_EquivalentPolicies)(_el);
                },
                defaultSecurityPolicyIdData: (_el: asn1.ASN1Element): void => {
                    defaultSecurityPolicyIdData = __utils._decode_implicit<
                        ObjectIdData
                    >(() => _decode_ObjectIdData)(_el);
                },
                extensions: (_el: asn1.ASN1Element): void => {
                    extensions = __utils._decode_implicit<Extensions>(
                        () => _decode_Extensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SPIF,
                _extension_additions_list_spec_for_SPIF,
                _root_component_type_list_2_spec_for_SPIF,
                undefined
            );
            return new SPIF /* SEQUENCE_CONSTRUCTOR_CALL */(
                versionInformation,
                updateInformation,
                securityPolicyIdData,
                privilegeId,
                rbacId,
                securityClassifications,
                securityCategories,
                equivalentPolicies,
                defaultSecurityPolicyIdData,
                extensions
            );
        };
    }
    return _cached_decoder_for_SPIF(el);
}
export function _encode_SPIF(value: SPIF, elGetter: __utils.ASN1Encoder<SPIF>) {
    if (!_cached_encoder_for_SPIF) {
        _cached_encoder_for_SPIF = function (
            value: SPIF,
            elGetter: __utils.ASN1Encoder<SPIF>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.versionInformation ===
                            undefined ||
                        __utils.deepEq(
                            value.versionInformation,
                            SPIF._default_value_for_versionInformation
                        )
                            ? undefined
                            : _encode_VersionInformationData(
                                  value.versionInformation,
                                  __utils.BER
                              ),
                        /* REQUIRED   */ _encode_UpdateInformationData(
                            value.updateInformation,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectIdData(
                            value.securityPolicyIdData,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.privilegeId,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.rbacId,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.securityClassifications ===
                        undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_SecurityClassifications,
                                  __utils.BER
                              )(value.securityClassifications, __utils.BER),
                        /* IF_ABSENT  */ value.securityCategories === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_SPIF_SecurityCategories,
                                  __utils.BER
                              )(value.securityCategories, __utils.BER),
                        /* IF_ABSENT  */ value.equivalentPolicies === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => _encode_EquivalentPolicies,
                                  __utils.BER
                              )(value.equivalentPolicies, __utils.BER),
                        /* IF_ABSENT  */ value.defaultSecurityPolicyIdData ===
                        undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  3,
                                  () => _encode_ObjectIdData,
                                  __utils.BER
                              )(value.defaultSecurityPolicyIdData, __utils.BER),
                        /* IF_ABSENT  */ value.extensions === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  4,
                                  () => _encode_Extensions,
                                  __utils.BER
                              )(value.extensions, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SPIF(value, elGetter);
}

// TODO: ObjectClassAssignment: OC-DATA

// TODO: ObjectSetAssignment: CatData

// TODO: ObjectAssignment: clearance

export type ClassList = asn1.BIT_STRING;
export const ClassList_unmarked: number = 0; /* LONG_NAMED_BIT */
export const ClassList_unclassified: number = 1; /* LONG_NAMED_BIT */
export const ClassList_restricted: number = 2; /* LONG_NAMED_BIT */
export const ClassList_confidential: number = 3; /* LONG_NAMED_BIT */
export const ClassList_secret: number = 4; /* LONG_NAMED_BIT */
export const ClassList_topSecret: number = 5; /* LONG_NAMED_BIT */
let _cached_decoder_for_ClassList: __utils.ASN1Decoder<ClassList> | null = null;
let _cached_encoder_for_ClassList: __utils.ASN1Encoder<ClassList> | null = null;
export function _decode_ClassList(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ClassList) {
        _cached_decoder_for_ClassList = __utils._decodeBitString;
    }
    return _cached_decoder_for_ClassList(el);
}
export function _encode_ClassList(
    value: ClassList,
    elGetter: __utils.ASN1Encoder<ClassList>
) {
    if (!_cached_encoder_for_ClassList) {
        _cached_encoder_for_ClassList = __utils._encodeBitString;
    }
    return _cached_encoder_for_ClassList(value, elGetter);
}

export class Clearance {
    constructor(
        readonly policyId: asn1.OBJECT_IDENTIFIER,
        readonly classList: asn1.OPTIONAL<ClassList>,
        readonly securityCategories: asn1.OPTIONAL<SecurityCategories>
    ) {}
    public static get _default_value_for_classList() {
        return new Uint8ClampedArray([asn1.TRUE_BIT]);
    }
}
export const _root_component_type_list_1_spec_for_Clearance: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "policyId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "classList",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityCategories",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Clearance: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Clearance: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Clearance: __utils.ASN1Decoder<Clearance> | null = null;
let _cached_encoder_for_Clearance: __utils.ASN1Encoder<Clearance> | null = null;
export function _decode_Clearance(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Clearance) {
        _cached_decoder_for_Clearance = function (
            el: asn1.ASN1Element
        ): Clearance {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let policyId!: asn1.OBJECT_IDENTIFIER;
            let classList: asn1.OPTIONAL<ClassList> =
                Clearance._default_value_for_classList;
            let securityCategories: asn1.OPTIONAL<SecurityCategories>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                policyId: (_el: asn1.ASN1Element): void => {
                    policyId = __utils._decode_implicit<asn1.OBJECT_IDENTIFIER>(
                        () => __utils._decodeObjectIdentifier
                    )(_el);
                },
                classList: (_el: asn1.ASN1Element): void => {
                    classList = __utils._decode_implicit<ClassList>(
                        () => _decode_ClassList
                    )(_el);
                },
                securityCategories: (_el: asn1.ASN1Element): void => {
                    securityCategories = __utils._decode_implicit<
                        SecurityCategories
                    >(() => _decode_SecurityCategories)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Clearance,
                _extension_additions_list_spec_for_Clearance,
                _root_component_type_list_2_spec_for_Clearance,
                undefined
            );
            return new Clearance /* SEQUENCE_CONSTRUCTOR_CALL */(
                policyId,
                classList,
                securityCategories
            );
        };
    }
    return _cached_decoder_for_Clearance(el);
}
export function _encode_Clearance(
    value: Clearance,
    elGetter: __utils.ASN1Encoder<Clearance>
) {
    if (!_cached_encoder_for_Clearance) {
        _cached_encoder_for_Clearance = function (
            value: Clearance,
            elGetter: __utils.ASN1Encoder<Clearance>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_implicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => __utils._encodeObjectIdentifier,
                            __utils.BER
                        )(value.policyId, __utils.BER),
                        /* IF_DEFAULT */ value.classList === undefined ||
                        __utils.deepEq(
                            value.classList,
                            Clearance._default_value_for_classList
                        )
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_ClassList,
                                  __utils.BER
                              )(value.classList, __utils.BER),
                        /* IF_ABSENT  */ value.securityCategories === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => _encode_SecurityCategories,
                                  __utils.BER
                              )(value.securityCategories, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_Clearance(value, elGetter);
}

// TODO: ObjectSetAssignment: SignatureAlgorithms

/* END_MODULE SIOsAccessControl-MODULE */
